/* =========================================================
   CITIZEN GRIEVANCE PORTAL
   COMPLETE SCRIPT.JS
   ========================================================= */

const API_URL = "http://localhost:5000/api/complaints";

let complaints = [];


/* =========================================================
   LANGUAGE DATA
   ========================================================= */

const translations = {

    en: {
        portalTitle: "Citizen Grievance Portal",
        portalSubtitle: "Government Services • Andhra Pradesh",

        homeNav: "Home",
        complaintNav: "Submit Complaint",
        trackNav: "Track Complaint",
        dashboardNav: "Officer Dashboard",

        heroSmallTitle: "CITIZEN SERVICES",
        heroTitle: "Citizen Grievance Management Portal",
        heroDescription:
            "Report civic issues, receive a unique complaint ID, and track your grievance from submission to resolution.",

        submitHeroButton: "Submit a Complaint",
        trackHeroButton: "Track Complaint",

        servicesTitle: "How can we help?",
        servicesDescription:
            "Use the portal to report issues and monitor the progress of your grievance.",

        serviceOneTitle: "Submit Complaint",
        serviceOneText:
            "Report civic problems such as roads, sanitation, water supply, electricity and other public services.",

        serviceTwoTitle: "Track Complaint",
        serviceTwoText:
            "Enter your complaint ID to view the current status of your grievance.",

        serviceThreeTitle: "Grievance Monitoring",
        serviceThreeText:
            "View overall grievance statistics including pending, progressing and completed complaints.",

        totalLabel: "Total",
        completedLabel: "Completed",
        progressLabel: "In Progress",
        pendingLabel: "Pending",

        complaintPageTitle: "Submit a Complaint",
        complaintPageDescription:
            "Provide the details below so your grievance can be registered and forwarded for action.",

        nameLabel: "Citizen Name",
        mobileLabel: "Mobile Number",
        categoryLabel: "Complaint Category",
        locationLabel: "Location",
        descriptionLabel: "Complaint Description",
        imageLabel: "Upload Image",
        imageHelp: "You may upload an image showing the issue.",

        submitComplaintButton: "Submit Complaint",

        trackPageTitle: "Track Your Complaint",
        trackPageDescription:
            "Enter your complaint ID to view the current grievance status.",

        complaintIdLabel: "Complaint ID",
        trackButton: "Track Complaint",

        dashboardTitle: "Officer Dashboard",
        dashboardDescription:
            "Citizen Grievance Monitoring and Management System",

        systemOnline: "System Online"
    },


    hi: {
        portalTitle: "नागरिक शिकायत पोर्टल",
        portalSubtitle: "सरकारी सेवाएं • आंध्र प्रदेश",

        homeNav: "होम",
        complaintNav: "शिकायत दर्ज करें",
        trackNav: "शिकायत ट्रैक करें",
        dashboardNav: "अधिकारी डैशबोर्ड",

        heroSmallTitle: "नागरिक सेवाएं",
        heroTitle: "नागरिक शिकायत प्रबंधन पोर्टल",
        heroDescription:
            "नागरिक समस्याओं की रिपोर्ट करें, एक शिकायत आईडी प्राप्त करें और अपनी शिकायत की स्थिति देखें।",

        submitHeroButton: "शिकायत दर्ज करें",
        trackHeroButton: "शिकायत ट्रैक करें",

        servicesTitle: "हम आपकी कैसे सहायता कर सकते हैं?",
        servicesDescription:
            "समस्याओं की रिपोर्ट करें और अपनी शिकायत की प्रगति देखें।",

        serviceOneTitle: "शिकायत दर्ज करें",
        serviceOneText:
            "सड़क, स्वच्छता, पानी, बिजली और अन्य सार्वजनिक सेवाओं से संबंधित समस्याओं की रिपोर्ट करें।",

        serviceTwoTitle: "शिकायत ट्रैक करें",
        serviceTwoText:
            "अपनी शिकायत की वर्तमान स्थिति देखने के लिए शिकायत आईडी दर्ज करें।",

        serviceThreeTitle: "शिकायत निगरानी",
        serviceThreeText:
            "लंबित, प्रगति में और पूर्ण शिकायतों के आंकड़े देखें।",

        totalLabel: "कुल",
        completedLabel: "पूर्ण",
        progressLabel: "प्रगति में",
        pendingLabel: "लंबित",

        complaintPageTitle: "शिकायत दर्ज करें",
        complaintPageDescription:
            "अपनी शिकायत दर्ज करने के लिए नीचे दिए गए विवरण भरें।",

        nameLabel: "नागरिक का नाम",
        mobileLabel: "मोबाइल नंबर",
        categoryLabel: "शिकायत श्रेणी",
        locationLabel: "स्थान",
        descriptionLabel: "शिकायत का विवरण",
        imageLabel: "चित्र अपलोड करें",
        imageHelp: "समस्या दिखाने वाला चित्र अपलोड कर सकते हैं।",

        submitComplaintButton: "शिकायत दर्ज करें",

        trackPageTitle: "अपनी शिकायत ट्रैक करें",
        trackPageDescription:
            "शिकायत की वर्तमान स्थिति देखने के लिए शिकायत आईडी दर्ज करें.",

        complaintIdLabel: "शिकायत आईडी",
        trackButton: "शिकायत ट्रैक करें",

        dashboardTitle: "अधिकारी डैशबोर्ड",
        dashboardDescription:
            "नागरिक शिकायत निगरानी और प्रबंधन प्रणाली",

        systemOnline: "सिस्टम ऑनलाइन"
    },


    te: {
        portalTitle: "పౌర ఫిర్యాదు పోర్టల్",
        portalSubtitle: "ప్రభుత్వ సేవలు • ఆంధ్రప్రదేశ్",

        homeNav: "హోమ్",
        complaintNav: "ఫిర్యాదు నమోదు",
        trackNav: "ఫిర్యాదు ట్రాక్",
        dashboardNav: "అధికారి డాష్‌బోర్డ్",

        heroSmallTitle: "పౌర సేవలు",
        heroTitle: "పౌర ఫిర్యాదుల నిర్వహణ పోర్టల్",
        heroDescription:
            "ప్రజా సమస్యలను నివేదించండి, ప్రత్యేక ఫిర్యాదు ID పొందండి మరియు మీ ఫిర్యాదు స్థితిని తెలుసుకోండి.",

        submitHeroButton: "ఫిర్యాదు నమోదు చేయండి",
        trackHeroButton: "ఫిర్యాదు ట్రాక్ చేయండి",

        servicesTitle: "మేము మీకు ఎలా సహాయం చేయగలం?",
        servicesDescription:
            "సమస్యలను నివేదించి మీ ఫిర్యాదు పురోగతిని తెలుసుకోండి.",

        serviceOneTitle: "ఫిర్యాదు నమోదు",
        serviceOneText:
            "రోడ్లు, పారిశుధ్యం, నీటి సరఫరా, విద్యుత్ మరియు ఇతర ప్రజా సేవల సమస్యలను నివేదించండి.",

        serviceTwoTitle: "ఫిర్యాదు ట్రాక్",
        serviceTwoText:
            "మీ ఫిర్యాదు స్థితిని తెలుసుకోవడానికి ఫిర్యాదు ID నమోదు చేయండి.",

        serviceThreeTitle: "ఫిర్యాదు పర్యవేక్షణ",
        serviceThreeText:
            "పెండింగ్, పురోగతిలో ఉన్న మరియు పూర్తయిన ఫిర్యాదుల గణాంకాలను చూడండి.",

        totalLabel: "మొత్తం",
        completedLabel: "పూర్తయినవి",
        progressLabel: "పురోగతిలో",
        pendingLabel: "పెండింగ్",

        complaintPageTitle: "ఫిర్యాదు నమోదు చేయండి",
        complaintPageDescription:
            "మీ ఫిర్యాదును నమోదు చేయడానికి క్రింది వివరాలను నమోదు చేయండి.",

        nameLabel: "పౌరుని పేరు",
        mobileLabel: "మొబైల్ నంబర్",
        categoryLabel: "ఫిర్యాదు వర్గం",
        locationLabel: "స్థానం",
        descriptionLabel: "ఫిర్యాదు వివరాలు",
        imageLabel: "చిత్రాన్ని అప్‌లోడ్ చేయండి",
        imageHelp:
            "సమస్యను చూపించే చిత్రాన్ని అప్‌లోడ్ చేయవచ్చు.",

        submitComplaintButton: "ఫిర్యాదు నమోదు చేయండి",

        trackPageTitle: "మీ ఫిర్యాదును ట్రాక్ చేయండి",
        trackPageDescription:
            "ఫిర్యాదు ప్రస్తుత స్థితిని తెలుసుకోవడానికి ఫిర్యాదు ID నమోదు చేయండి.",

        complaintIdLabel: "ఫిర్యాదు ID",
        trackButton: "ఫిర్యాదును ట్రాక్ చేయండి",

        dashboardTitle: "అధికారి డాష్‌బోర్డ్",
        dashboardDescription:
            "పౌర ఫిర్యాదుల పర్యవేక్షణ మరియు నిర్వహణ వ్యవస్థ",

        systemOnline: "సిస్టమ్ ఆన్‌లైన్"
    }
};


/* =========================================================
   CHANGE LANGUAGE
   ========================================================= */

function changeLanguage(language) {

    const languageData = translations[language];

    if (!languageData) {
        return;
    }

    Object.keys(languageData).forEach(function (id) {

        const element = document.getElementById(id);

        if (element) {
            element.textContent = languageData[id];
        }

    });

    localStorage.setItem("selectedLanguage", language);

    document.documentElement.lang = language;

}


/* =========================================================
   SHOW SECTIONS
   ========================================================= */

function showSection(sectionId) {

    const sections = document.querySelectorAll(".section");

    sections.forEach(function (section) {
        section.classList.remove("active");
    });


    const selectedSection =
        document.getElementById(sectionId);

    if (selectedSection) {
        selectedSection.classList.add("active");
    }


    const navButtons =
        document.querySelectorAll(".nav-button");

    navButtons.forEach(function (button) {
        button.classList.remove("active");
    });


    const navMap = {

        home: "homeNav",
        complaint: "complaintNav",
        track: "trackNav",
        dashboard: "dashboardNav"

    };


    const activeNav =
        document.getElementById(navMap[sectionId]);

    if (activeNav) {
        activeNav.classList.add("active");
    }


    /*
       Whenever Officer Dashboard is opened,
       get the latest complaints from backend.
    */

    if (sectionId === "dashboard") {
        loadComplaints();
    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   IMAGE PREVIEW
   ========================================================= */

function previewImage(event) {

    const file = event.target.files[0];

    const container =
        document.getElementById(
            "imagePreviewContainer"
        );

    const preview =
        document.getElementById(
            "imagePreview"
        );


    if (!file) {

        container.style.display = "none";

        return;
    }


    if (!file.type.startsWith("image/")) {

        alert("Please select an image file.");

        event.target.value = "";

        container.style.display = "none";

        return;
    }


    const reader = new FileReader();


    reader.onload = function (e) {

        preview.src = e.target.result;

        container.style.display = "block";

    };


    reader.readAsDataURL(file);

}


/* =========================================================
   SUBMIT COMPLAINT
   ========================================================= */

async function submitComplaint(event) {

    event.preventDefault();


    const name =
        document.getElementById("citizenName").value.trim();

    const mobile =
        document.getElementById("mobile").value.trim();

    const category =
        document.getElementById("category").value;

    const location =
        document.getElementById("location").value.trim();

    const description =
        document.getElementById("description").value.trim();

    const imageInput =
        document.getElementById("complaintImage");


    if (
        !name ||
        !mobile ||
        !category ||
        !location ||
        !description
    ) {

        alert(
            "Please complete all required fields."
        );

        return;
    }


    const formData = new FormData();


    /*
       These names must match the backend.
    */

    formData.append(
        "citizenName",
        name
    );

    formData.append(
        "mobile",
        mobile
    );

    formData.append(
        "category",
        category
    );

    formData.append(
        "location",
        location
    );

    formData.append(
        "description",
        description
    );


    /*
       Add image if user selected one.
    */

    if (
        imageInput &&
        imageInput.files.length > 0
    ) {

        formData.append(
            "image",
            imageInput.files[0]
        );

    }


    try {

        const response =
            await fetch(
                API_URL,
                {
                    method: "POST",
                    body: formData
                }
            );


        const data =
            await response.json();


        if (!response.ok) {

            throw new Error(
                data.message ||
                "Complaint submission failed."
            );

        }


        /*
           Support common backend response formats.
        */

        const complaint =
            data.complaint ||
            data;


        const complaintId =
            complaint.id ||
            complaint.complaintId;


        alert(
            "Complaint submitted successfully!\n\n" +
            "Your Complaint ID: " +
            complaintId
        );


        /*
           Reset form.
        */

        document
            .getElementById("complaintForm")
            .reset();


        /*
           Hide image preview.
        */

        document
            .getElementById(
                "imagePreviewContainer"
            )
            .style.display = "none";


        /*
           Put the new complaint ID
           into Track Complaint box.
        */

        document
            .getElementById("complaintId")
            .value = complaintId;


        /*
           IMPORTANT:
           Reload complaints from backend.
        */

        await loadComplaints();


        /*
           Open Track Complaint section.
        */

        showSection("track");


    } catch (error) {

        console.error(
            "Complaint submission error:",
            error
        );


        alert(
            "Could not connect to the backend.\n\n" +
            "Please make sure your Node.js server is running at:\n" +
            "http://localhost:5000"
        );

    }

}


/* =========================================================
   LOAD COMPLAINTS FROM BACKEND
   ========================================================= */

async function loadComplaints() {

    try {

        const response =
            await fetch(API_URL);


        if (!response.ok) {

            throw new Error(
                "Server returned " +
                response.status
            );

        }


        const data =
            await response.json();


        /*
           Backend might return:

           [
              {...},
              {...}
           ]

           OR:

           {
              complaints: [...]
           }
        */

        if (Array.isArray(data)) {

            complaints = data;

        }

        else if (
            Array.isArray(data.complaints)
        ) {

            complaints =
                data.complaints;

        }

        else {

            complaints = [];

        }


        console.log(
            "Complaints from backend:",
            complaints
        );


        /*
           Update statistics.
        */

        updateStatistics();


        /*
           Update dashboard table.
        */

        renderComplaintTable();


    } catch (error) {

        console.error(
            "Could not load complaints:",
            error
        );


        /*
           Don't put old fake complaints back.
        */

        complaints = [];

        updateStatistics();

        renderComplaintTable();

    }

}


/* =========================================================
   UPDATE STATISTICS
   ========================================================= */

function updateStatistics() {

    const total =
        complaints.length;


    const pending =
        complaints.filter(function (complaint) {

            return complaint.status === "Pending";

        }).length;


    const progress =
        complaints.filter(function (complaint) {

            return complaint.status === "In Progress";

        }).length;


    const completed =
        complaints.filter(function (complaint) {

            return complaint.status === "Completed";

        }).length;


    /*
       PUBLIC STATISTICS
    */

    document.getElementById(
        "publicTotal"
    ).textContent = total;


    document.getElementById(
        "publicPending"
    ).textContent = pending;


    document.getElementById(
        "publicProgress"
    ).textContent = progress;


    document.getElementById(
        "publicCompleted"
    ).textContent = completed;


    /*
       OFFICER DASHBOARD STATISTICS
    */

    document.getElementById(
        "dashboardTotal"
    ).textContent = total;


    document.getElementById(
        "dashboardPending"
    ).textContent = pending;


    document.getElementById(
        "dashboardProgress"
    ).textContent = progress;


    document.getElementById(
        "dashboardCompleted"
    ).textContent = completed;

}


/* =========================================================
   RENDER DASHBOARD TABLE
   ========================================================= */

function renderComplaintTable() {

    const tableBody =
        document.getElementById(
            "complaintTableBody"
        );


    if (!tableBody) {
        return;
    }


    const filter =
        document.getElementById(
            "statusFilter"
        ).value;


    let filteredComplaints =
        complaints;


    /*
       Apply status filter.
    */

    if (filter !== "All") {

        filteredComplaints =
            complaints.filter(
                function (complaint) {

                    return (
                        complaint.status ===
                        filter
                    );

                }
            );

    }


    tableBody.innerHTML = "";


    /*
       No complaints.
    */

    if (
        filteredComplaints.length === 0
    ) {

        tableBody.innerHTML = `

            <tr>

                <td
                    colspan="6"
                    style="text-align:center;
                           padding:30px;">

                    No complaints found.

                </td>

            </tr>

        `;

        return;
    }


    /*
       Show newest complaints first.
    */

    const latest =
        [...filteredComplaints].reverse();


    latest.forEach(function (complaint) {

        const row =
            document.createElement("tr");


        let statusClass = "pending";


        if (
            complaint.status ===
            "Completed"
        ) {

            statusClass = "completed";

        }

        else if (
            complaint.status ===
            "In Progress"
        ) {

            statusClass = "progress";

        }


        const complaintId =
            complaint.id ||
            complaint.complaintId ||
            "";


        const citizen =
            complaint.citizenName ||
            complaint.citizen ||
            complaint.name ||
            "";


        const category =
            complaint.category ||
            "";


        const location =
            complaint.location ||
            "";


        const date =
            complaint.date ||
            complaint.createdAt ||
            "";


        const status =
            complaint.status ||
            "Pending";


        row.innerHTML = `

            <td>
                <strong>
                    ${escapeHTML(complaintId)}
                </strong>
            </td>

            <td>
                ${escapeHTML(citizen)}
            </td>

            <td>
                ${escapeHTML(category)}
            </td>

            <td>
                ${escapeHTML(location)}
            </td>

            <td>
                ${escapeHTML(
                    formatDate(date)
                )}
            </td>

            <td>

                <span
                    class="status ${statusClass}">

                    ${escapeHTML(status)}

                </span>

            </td>

        `;


        tableBody.appendChild(row);

    });

}


/* =========================================================
   FILTER COMPLAINTS
   ========================================================= */

function filterComplaints() {

    renderComplaintTable();

}


/* =========================================================
   TRACK COMPLAINT
   ========================================================= */

async function trackComplaint() {

    const input =
        document.getElementById(
            "complaintId"
        );


    const result =
        document.getElementById(
            "trackResult"
        );


    const complaintId =
        input.value.trim();


    if (!complaintId) {

        result.style.display = "block";

        result.innerHTML = `
            <strong>
                Please enter a complaint ID.
            </strong>
        `;

        return;
    }


    /*
       Get latest data from backend.
    */

    await loadComplaints();


    const found =
        complaints.find(
            function (complaint) {

                const id =
                    complaint.id ||
                    complaint.complaintId ||
                    "";

                return (
                    String(id).toUpperCase() ===
                    complaintId.toUpperCase()
                );

            }
        );


    result.style.display = "block";


    if (!found) {

        result.innerHTML = `

            <strong>
                Complaint not found.
            </strong>

            <br><br>

            Please check your complaint ID.

        `;

        return;
    }


    const id =
        found.id ||
        found.complaintId ||
        "";


    const status =
        found.status ||
        "Pending";


    let statusClass =
        "pending";


    if (status === "Completed") {
        statusClass = "completed";
    }

    else if (status === "In Progress") {
        statusClass = "progress";
    }


    result.innerHTML = `

        <div>

            <strong>
                Complaint ID:
            </strong>

            ${escapeHTML(id)}

        </div>


        <div>

            <strong>
                Citizen:
            </strong>

            ${escapeHTML(
                found.citizenName ||
                found.citizen ||
                ""
            )}

        </div>


        <div>

            <strong>
                Category:
            </strong>

            ${escapeHTML(
                found.category || ""
            )}

        </div>


        <div>

            <strong>
                Location:
            </strong>

            ${escapeHTML(
                found.location || ""
            )}

        </div>


        <div>

            <strong>
                Status:
            </strong>

            <span
                class="status ${statusClass}">

                ${escapeHTML(status)}

            </span>

        </div>

    `;

}


/* =========================================================
   DATE FORMAT
   ========================================================= */

function formatDate(dateValue) {

    if (!dateValue) {
        return "";
    }


    /*
       If backend already gives
       YYYY-MM-DD, keep it.
    */

    if (
        /^\d{4}-\d{2}-\d{2}$/.test(
            String(dateValue)
        )
    ) {

        return dateValue;

    }


    const date =
        new Date(dateValue);


    if (
        Number.isNaN(
            date.getTime()
        )
    ) {

        return dateValue;

    }


    return date
        .toISOString()
        .split("T")[0];

}


/* =========================================================
   SECURITY HELPER
   ========================================================= */

function escapeHTML(value) {

    if (
        value === null ||
        value === undefined
    ) {

        return "";

    }


    return String(value)

        .replaceAll("&", "&amp;")

        .replaceAll("<", "&lt;")

        .replaceAll(">", "&gt;")

        .replaceAll('"', "&quot;")

        .replaceAll("'", "&#039;");

}


/* =========================================================
   PAGE LOAD
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        /*
           Restore saved language.
        */

        const savedLanguage =
            localStorage.getItem(
                "selectedLanguage"
            ) || "en";


        const languageSelect =
            document.getElementById(
                "languageSelect"
            );


        if (languageSelect) {

            languageSelect.value =
                savedLanguage;

        }


        changeLanguage(
            savedLanguage
        );


        /*
           Load real complaints
           from Node.js backend.
        */

        loadComplaints();

    }
);