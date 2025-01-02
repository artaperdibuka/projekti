

const header = document.querySelector('header');
function fixedNavbar(){
    header.classList.toggle('scroll', window.pageYOffset > 0)
}
fixedNavbar();
window.addEventListener('scroll', fixedNavbar);

let menu = document.querySelector('#menu-btn');
let userBtn = document.querySelector('#user-btn');

menu.addEventListener('click', function(){
    let nav = document.querySelector('.navbar');
    nav.classList.toggle('active');
})
userBtn.addEventListener('click', function(){
    let userBox = document.querySelector('.user-box');
    userBox.classList.toggle('active');
})

//login register
// Check login status on page load
window.addEventListener("DOMContentLoaded", () => {
    const userBox = document.querySelector(".user-box");
    const username = localStorage.getItem("username");
    const email = localStorage.getItem("email");
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn === "true") {
        // Display username and email
        userBox.querySelector("p:nth-child(1) span").textContent = username;
        userBox.querySelector("p:nth-child(2) span").textContent = email;

        // Hide login and register buttons
        userBox.querySelector(".btn").style.display = "none";
        userBox.querySelectorAll(".btn")[1].style.display = "none";
    } else {
        // Show login and register buttons if not logged in
        userBox.querySelector("p:nth-child(1) span").textContent = "Guest";
    }
});

// Logout function
document.querySelector(".logout-btn").addEventListener("click", (event) => {
    event.preventDefault();
    localStorage.setItem("isLoggedIn", "false");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    alert("You have been logged out!");
    window.location.href = "login.html";
});

function subscribeNewsletter() {
    var email = document.getElementById('emailInput').value;
    
    // Check if email contains '@'
    if (email && email.includes('@')) {
        Swal.fire("Thank you!", "You will be informed of all the news!", "success");
    } else if (!email) {
        Swal.fire("Error!", "Please enter an email address!", "error");
    } else {
        Swal.fire("Error!", "Please enter a valid email address!", "error");
    }
}
