# grievance-portal
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Citizen Grievance Portal</title>

<style>

body{
margin:0;
font-family:Segoe UI, Arial;
background:#f4f7fb;
}

/* HEADER */

.header{
background:white;
padding:12px 40px;
display:flex;
align-items:center;
justify-content:space-between;
box-shadow:0 2px 6px rgba(0,0,0,0.1);
}

/* LOGO AREA */

.logo-area{
display:flex;
align-items:center;
gap:15px;
}

.logo-area img{
width:70px;
height:70px;
}

.portal-title{
font-size:22px;
font-weight:bold;
color:#333;
}

/* NAVIGATION */

.nav-links a{
margin:0 12px;
color:#333;
text-decoration:none;
font-weight:500;
cursor:pointer;
}

.nav-links a:hover{
color:#f97316;
}

/* LANGUAGE SELECT */

.lang-select{
padding:6px;
border-radius:4px;
}

/* HERO */

.hero{
background:linear-gradient(90deg,#c7d37f,#f59e0b);
height:240px;
display:flex;
align-items:center;
justify-content:center;
text-align:center;
color:white;
}

.hero h1{
font-size:36px;
margin-bottom:10px;
}

/* SECTIONS */

.section{
display:none;
padding:40px;
}

.active{
display:block;
}

/* CARD */

.card{
background:white;
padding:20px;
margin:20px auto;
max-width:800px;
border-radius:10px;
box-shadow:0 6px 20px rgba(0,0,0,0.1);
}

/* FORM */

.container{
background:white;
max-width:700px;
margin:auto;
padding:30px;
border-radius:10px;
box-shadow:0 6px 20px rgba(0,0,0,0.1);
}

input,select,textarea{
width:100%;
padding:10px;
margin:10px 0;
border-radius:6px;
border:1px solid #ccc;
}

button{
background:#1a6fb3;
color:white;
border:none;
padding:10px 20px;
border-radius:5px;
cursor:pointer;
}

/* TABLE */

table{
width:80%;
margin:auto;
border-collapse:collapse;
background:white;
}

th,td{
padding:10px;
border:1px solid #ddd;
text-align:center;
}

th{
background:#1a6fb3;
color:white;
}

/* FOOTER */

footer{
background:#0f4c81;
color:white;
text-align:center;
padding:15px;
margin-top:40px;
}

</style>

<script>

function showSection(id){

let sections=document.querySelectorAll(".section");
sections.forEach(s=>s.classList.remove("active"));

document.getElementById(id).classList.add("active");

}

/* LANGUAGE SWITCH */

function changeLanguage(lang){

if(lang=="en"){

document.getElementById("title").innerText="Citizen Grievance Portal";
document.getElementById("homeNav").innerText="Home";
document.getElementById("complaintNav").innerText="Submit Complaint";
document.getElementById("trackNav").innerText="Track Complaint";
document.getElementById("dashboardNav").innerText="Officer Dashboard";
document.getElementById("heroTitle").innerText="Citizen Grievance Management Portal";
document.getElementById("heroDesc").innerText="Report civic issues quickly and help improve your city.";

}

if(lang=="hi"){

document.getElementById("title").innerText="नागरिक शिकायत पोर्टल";
document.getElementById("homeNav").innerText="होम";
document.getElementById("complaintNav").innerText="शिकायत दर्ज करें";
document.getElementById("trackNav").innerText="शिकायत ट्रैक करें";
document.getElementById("dashboardNav").innerText="अधिकारी डैशबोर्ड";
document.getElementById("heroTitle").innerText="नागरिक शिकायत प्रबंधन पोर्टल";
document.getElementById("heroDesc").innerText="अपने शहर की समस्याओं की रिपोर्ट करें";

}

if(lang=="te"){

document.getElementById("title").innerText="పౌర ఫిర్యాదు పోర్టల్";
document.getElementById("homeNav").innerText="హోమ్";
document.getElementById("complaintNav").innerText="ఫిర్యాదు పంపండి";
document.getElementById("trackNav").innerText="ఫిర్యాదు ట్రాక్ చేయండి";
document.getElementById("dashboardNav").innerText="అధికారి డాష్‌బోర్డ్";
document.getElementById("heroTitle").innerText="పౌర ఫిర్యాదు నిర్వహణ పోర్టల్";
document.getElementById("heroDesc").innerText="మీ నగర సమస్యలను నివేదించండి";

}

}

/* SUBMIT */

function submitComplaint(){

alert("Complaint Submitted Successfully! ID: "+Math.floor(Math.random()*900+100));

showSection("track");

}

</script>

</head>

<body>

<!-- HEADER -->

<div class="header">

<div class="logo-area">

<!-- YOUR UPLOADED LOGO -->
<img src="C:\Users\divya\OneDrive\Pictures\Screenshots\Screenshot 2026-03-11 101851.png" alt="Andhra Pradesh Logo">

<div id="title" class="portal-title">
Citizen Grievance Portal
</div>

</div>

<div class="nav-links">

<a id="homeNav" onclick="showSection('home')">Home</a>
<a id="complaintNav" onclick="showSection('complaint')">Submit Complaint</a>
<a id="trackNav" onclick="showSection('track')">Track Complaint</a>
<a id="dashboardNav" onclick="showSection('dashboard')">Officer Dashboard</a>

<select class="lang-select" onchange="changeLanguage(this.value)">
<option value="en">English</option>
<option value="hi">हिंदी</option>
<option value="te">తెలుగు</option>
</select>

</div>

</div>

<!-- HOME -->

<div id="home" class="section active">

<div class="hero">

<div>
<h1 id="heroTitle">Citizen Grievance Management Portal</h1>
<p id="heroDesc">Report civic issues quickly and help improve your city.</p>
<button onclick="showSection('complaint')">Report Issue</button>
</div>

</div>

<div class="card">
<h3>Recent Issues</h3>
<p>🚧 Road Damage near City Center</p>
<p>🗑 Garbage Overflow in Market Area</p>
<p>💡 Streetlight Failure near Park</p>
</div>

</div>

<!-- COMPLAINT -->

<div id="complaint" class="section">

<div class="container">

<h2>Submit Complaint</h2>

<input placeholder="Complaint Title">

<select>
<option>Select Category</option>
<option>Road Issue</option>
<option>Garbage</option>
<option>Water Supply</option>
<option>Electricity</option>
</select>

<textarea placeholder="Describe the problem"></textarea>

<input placeholder="Enter Location">

<button onclick="submitComplaint()">Submit Complaint</button>

</div>

</div>

<!-- TRACK -->

<div id="track" class="section">

<div class="container">

<h2>Track Complaint</h2>

<input placeholder="Enter Complaint ID">

<button>Track</button>

</div>

</div>

<!-- DASHBOARD -->

<div id="dashboard" class="section">

<h2 style="text-align:center">Officer Dashboard</h2>

<table>

<tr>
<th>ID</th>
<th>Category</th>
<th>Status</th>
</tr>

<tr>
<td>123</td>
<td>Road</td>
<td>In Progress</td>
</tr>

<tr>
<td>124</td>
<td>Garbage</td>
<td>Submitted</td>
</tr>

<tr>
<td>125</td>
<td>Street Light</td>
<td>Resolved</td>
</tr>

</table>

</div>

<footer>

<p>© 2026 Citizen Grievance Portal | Government of Andhra Pradesh</p>

</footer>

</body>
</html>
