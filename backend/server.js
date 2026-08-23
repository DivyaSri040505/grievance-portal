const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;


/* =========================================================
   MIDDLEWARE
   ========================================================= */

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


/* =========================================================
   FOLDERS
   ========================================================= */

const dataFolder = path.join(__dirname, "data");
const uploadsFolder = path.join(__dirname, "uploads");

if (!fs.existsSync(dataFolder)) {
    fs.mkdirSync(dataFolder);
}

if (!fs.existsSync(uploadsFolder)) {
    fs.mkdirSync(uploadsFolder);
}


/* =========================================================
   COMPLAINT DATABASE FILE
   ========================================================= */

const complaintsFile = path.join(
    dataFolder,
    "complaints.json"
);


if (!fs.existsSync(complaintsFile)) {
    fs.writeFileSync(
        complaintsFile,
        JSON.stringify([], null, 2)
    );
}


/* =========================================================
   READ COMPLAINTS
   ========================================================= */

function getComplaints() {

    try {

        const data =
            fs.readFileSync(
                complaintsFile,
                "utf8"
            );

        return JSON.parse(data);

    } catch (error) {

        console.error(
            "Error reading complaints:",
            error
        );

        return [];

    }

}


/* =========================================================
   SAVE COMPLAINTS
   ========================================================= */

function saveComplaints(complaints) {

    fs.writeFileSync(
        complaintsFile,
        JSON.stringify(
            complaints,
            null,
            2
        )
    );

}


/* =========================================================
   IMAGE UPLOAD
   ========================================================= */

const storage =
    multer.diskStorage({

        destination: function (
            req,
            file,
            cb
        ) {

            cb(
                null,
                uploadsFolder
            );

        },

        filename: function (
            req,
            file,
            cb
        ) {

            const extension =
                path.extname(
                    file.originalname
                );

            const filename =
                Date.now() +
                "-" +
                Math.round(
                    Math.random() * 100000
                ) +
                extension;

            cb(
                null,
                filename
            );

        }

    });


const upload =
    multer({
        storage: storage
    });


/* =========================================================
   SERVE UPLOADED IMAGES
   ========================================================= */

app.use(
    "/uploads",
    express.static(uploadsFolder)
);


/* =========================================================
   GENERATE COMPLAINT ID
   ========================================================= */

function generateComplaintId() {

    const complaints =
        getComplaints();

    let id;

    do {

        const number =
            Math.floor(
                1000 +
                Math.random() * 9000
            );

        id =
            "GRV-" +
            number;

    } while (
        complaints.some(
            complaint =>
                complaint.id === id
        )
    );

    return id;

}


/* =========================================================
   HOME / SERVER TEST
   ========================================================= */

app.get(
    "/",
    function (req, res) {

        res.json({

            success: true,

            message:
                "Citizen Grievance Portal Backend is running.",

            server:
                "http://localhost:5000"

        });

    }
);


/* =========================================================
   SUBMIT COMPLAINT
   ========================================================= */

app.post(
    "/api/complaints",
    upload.single("image"),
    function (req, res) {

        try {

            const {
                citizenName,
                mobile,
                category,
                location,
                description
            } = req.body;


            /* Check required fields */

            if (
                !citizenName ||
                !mobile ||
                !category ||
                !location ||
                !description
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Please fill all required fields."

                });

            }


            const complaints =
                getComplaints();


            const complaintId =
                generateComplaintId();


            const newComplaint = {

                id: complaintId,

                citizenName:
                    citizenName,

                mobile:
                    mobile,

                category:
                    category,

                location:
                    location,

                description:
                    description,

                image:
                    req.file
                        ? "/uploads/" +
                          req.file.filename
                        : null,

                status:
                    "Pending",

                createdAt:
                    new Date().toISOString()

            };


            complaints.push(
                newComplaint
            );


            saveComplaints(
                complaints
            );


            res.status(201).json({

                success: true,

                message:
                    "Complaint submitted successfully.",

                complaint:
                    newComplaint

            });

        } catch (error) {

            console.error(
                "Submit complaint error:",
                error
            );

            res.status(500).json({

                success: false,

                message:
                    "Server error while submitting complaint."

            });

        }

    }
);


/* =========================================================
   TRACK COMPLAINT
   ========================================================= */

app.get(
    "/api/complaints/:id",
    function (req, res) {

        try {

            const complaintId =
                req.params.id
                    .trim()
                    .toUpperCase();


            const complaints =
                getComplaints();


            const complaint =
                complaints.find(
                    item =>
                        item.id ===
                        complaintId
                );


            if (!complaint) {

                return res.status(404).json({

                    success: false,

                    message:
                        "Complaint not found."

                });

            }


            res.json({

                success: true,

                complaint:
                    complaint

            });

        } catch (error) {

            console.error(
                "Track complaint error:",
                error
            );

            res.status(500).json({

                success: false,

                message:
                    "Server error while tracking complaint."

            });

        }

    }
);


/* =========================================================
   GET ALL COMPLAINTS
   ========================================================= */

app.get(
    "/api/complaints",
    function (req, res) {

        const complaints =
            getComplaints();


        res.json({

            success: true,

            complaints:
                complaints

        });

    }
);


/* =========================================================
   STATISTICS
   ========================================================= */

app.get(
    "/api/statistics",
    function (req, res) {

        const complaints =
            getComplaints();


        const total =
            complaints.length;


        const pending =
            complaints.filter(
                complaint =>
                    complaint.status ===
                    "Pending"
            ).length;


        const progress =
            complaints.filter(
                complaint =>
                    complaint.status ===
                    "In Progress"
            ).length;


        const completed =
            complaints.filter(
                complaint =>
                    complaint.status ===
                    "Completed"
            ).length;


        res.json({

            success: true,

            statistics: {

                total:
                    total,

                pending:
                    pending,

                progress:
                    progress,

                completed:
                    completed

            }

        });

    }
);


/* =========================================================
   UPDATE COMPLAINT STATUS
   ========================================================= */

app.patch(
    "/api/complaints/:id/status",
    function (req, res) {

        try {

            const complaintId =
                req.params.id
                    .trim()
                    .toUpperCase();


            const {
                status
            } = req.body;


            const allowedStatuses = [

                "Pending",

                "In Progress",

                "Completed"

            ];


            if (
                !allowedStatuses.includes(
                    status
                )
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Invalid complaint status."

                });

            }


            const complaints =
                getComplaints();


            const complaint =
                complaints.find(
                    item =>
                        item.id ===
                        complaintId
                );


            if (!complaint) {

                return res.status(404).json({

                    success: false,

                    message:
                        "Complaint not found."

                });

            }


            complaint.status =
                status;


            complaint.updatedAt =
                new Date().toISOString();


            saveComplaints(
                complaints
            );


            res.json({

                success: true,

                message:
                    "Complaint status updated successfully.",

                complaint:
                    complaint

            });

        } catch (error) {

            console.error(
                "Update status error:",
                error
            );

            res.status(500).json({

                success: false,

                message:
                    "Server error."

            });

        }

    }
);


/* =========================================================
   START SERVER
   ========================================================= */

app.listen(
    PORT,
    function () {

        console.log(
            "========================================"
        );

        console.log(
            "Citizen Grievance Portal Backend"
        );

        console.log(
            "Server running at:"
        );

        console.log(
            `http://localhost:${PORT}`
        );

        console.log(
            "========================================"
        );

    }
);