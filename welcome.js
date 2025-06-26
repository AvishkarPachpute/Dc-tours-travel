// Script to handle navigation functionality
function showHome() {
    window.location.href = "home.html";
}

function showAbout() {
    window.location.href = "about.html";
}

function showPackages() {
    window.location.href = "packages.html";
}

function showContact() {
    window.location.href = "contact.html";
}

function showBooking() {
    window.location.href = "booking.html";
}

  // Function to toggle display of package details
  function toggleDetails(id) {
    var details = document.getElementById(id);
    if (details.style.display === "none") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}

 // Function to toggle display of package details
 function toggleDetails(id) {
    var details = document.getElementById(id);
    if (details.style.display === "none") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}