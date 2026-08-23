# Citizen Grievance Portal — Andhra Pradesh

A professional web-based **Citizen Grievance Portal** designed to help citizens submit, track, and monitor public complaints through a simple and user-friendly interface.

## 📌 Project Overview

The Citizen Grievance Portal is a web application developed to provide a centralized platform for citizens to report public service-related issues.

Citizens can submit complaints by providing their details, complaint category, location, description, and an optional image of the issue.

Each complaint is assigned a unique complaint ID, allowing citizens to track the progress of their grievance.

The portal also provides an **Officer Dashboard** where registered grievances can be monitored according to their current status.

## ✨ Features

* Citizen complaint submission
* Complaint ID generation
* Complaint tracking
* Complaint category selection
* Location-based complaint details
* Complaint description
* Image upload for supporting evidence
* Image preview before submission
* Pending complaint status
* In Progress complaint status
* Completed complaint status
* Public grievance statistics
* Total complaint count
* Pending complaint count
* In Progress complaint count
* Completed complaint count
* Officer Dashboard
* Recent grievance monitoring
* Complaint status filtering
* Telugu language support
* Hindi language support
* English language support
* Responsive and user-friendly interface
* Government-style professional design

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js

### Data Storage

* JSON-based data storage

### Development Tools

* Visual Studio Code
* Git
* GitHub

## 📂 Project Structure

```text
grievance-portal/
│
├── backend/
│   │
│   ├── data/
│   │   └── complaints.json
│   │
│   ├── uploads/
│   │
│   ├── node_modules/
│   │
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── frontend/
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── README.md
└── .gitignore
```

## 🔄 Complaint Management Flow

```text
Citizen
   ↓
Open Citizen Grievance Portal
   ↓
Submit Complaint
   ↓
Enter Citizen Details
   ↓
Select Complaint Category
   ↓
Enter Location and Description
   ↓
Upload Supporting Image
   ↓
Submit Complaint
   ↓
Unique Complaint ID Generated
   ↓
Complaint Stored
   ↓
Officer Dashboard
   ↓
Complaint Status Updated
   ↓
Citizen Tracks Complaint
```

## 📝 Complaint Submission

Citizens can submit grievances by entering:

* Citizen Name
* Mobile Number
* Complaint Category
* Location
* Complaint Description
* Supporting Image

The uploaded image can be used as supporting evidence for the reported issue.

## 🔎 Complaint Tracking

Citizens can enter their unique complaint ID in the **Track Complaint** section.

The portal displays the current status of the complaint.

Possible complaint statuses include:

```text
Pending
    ↓
In Progress
    ↓
Completed
```

## 📊 Public Grievance Statistics

The portal provides an overview of registered grievances.

The statistics include:

* Total Complaints
* Completed Complaints
* In Progress Complaints
* Pending Complaints

## 🏢 Officer Dashboard

The Officer Dashboard provides a centralized view of citizen grievances.

Officers can view:

* Total Complaints
* Pending Complaints
* In Progress Complaints
* Completed Complaints
* Recent Grievances
* Complaint ID
* Citizen Name
* Complaint Category
* Location
* Complaint Date
* Complaint Status

The dashboard also provides a status filter to make grievance monitoring easier.

## 🌐 Multi-Language Support

The portal supports multiple languages:

* English
* తెలుగు (Telugu)
* हिंदी (Hindi)

Users can select their preferred language from the language selection menu.

## 🖼️ Image Upload

Citizens can upload an image related to their complaint.

Images can be used to show:

* Damaged roads
* Garbage and sanitation problems
* Water supply issues
* Drainage problems
* Street light problems
* Other public service issues

## 🔐 Backend Integration

The project includes a backend developed using **Node.js** and **Express.js**.

The backend handles complaint-related operations and stores complaint information.

## 💾 Data Storage

Complaint information is maintained using JSON-based data storage.

```text
backend/data/complaints.json
```

Uploaded complaint images are maintained in:

```text
backend/uploads/
```

## 🚀 Running the Project

### 1. Open the project

Open the `grievance-portal` folder in Visual Studio Code.

### 2. Open the backend folder

```bash
cd backend
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the server

```bash
node server.js
```

## 📚 Learning Outcomes

This project demonstrates practical knowledge of:

* HTML5
* CSS3
* JavaScript
* DOM manipulation
* Event handling
* Form handling
* Image upload and preview
* Frontend and backend integration
* Node.js
* Express.js
* JSON data handling
* Git
* GitHub
* Responsive web design

## 🎯 Project Objectives

The main objectives of the Citizen Grievance Portal are:

* Provide citizens with an easy way to report public issues
* Make complaint submission simple and accessible
* Allow citizens to track their complaints
* Provide supporting images for reported issues
* Help officers monitor grievances efficiently
* Display transparent grievance statistics
* Provide a multilingual citizen-friendly interface

## 🚀 Future Enhancements

The project can be further improved by adding:

* Database integration using MySQL or MongoDB
* Secure user authentication
* Officer authentication and role-based access
* Email and SMS notifications
* Real-time complaint status updates
* GPS-based location selection
* Interactive maps
* Complaint assignment to departments
* Cloud image storage
* Advanced analytics and reports
* Mobile application version

## 👩‍💻 Author

**Divya Sri Chinthakunta**

GitHub: [DivyaSri040505](https://github.com/DivyaSri040505/)

### Project

**Citizen Grievance Portal — Andhra Pradesh**

Developed as a college web development project.

## 📄 License

This project was developed for educational and demonstration purposes.

© 2026 Divya Sri Chinthakunta. All rights reserved.
