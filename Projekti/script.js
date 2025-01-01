

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
"use strict";
// Home page slider
const leftArrow = document.querySelector('.left-arrow .bxs-left-arrow'),
      rightArrow = document.querySelector('.right-arrow .bxs-right-arrow'),
      slider = document.querySelector('.slider');

let currentIndex = 0;
const slides = document.querySelectorAll('.slider__slider');
const totalSlides = slides.length;

// Scroll to right
function scrollRight() {
    currentIndex++;

    if (currentIndex >= totalSlides) {
        currentIndex = 0; // Reset to the first slide
        slider.scrollTo({
            left: 0,
            behavior: "auto" // No smooth transition for reset
        });
    } else {
        slider.scrollBy({
            left: window.innerWidth, // Move by one screen width
            behavior: "smooth"
        });
    }
}

// Scroll to left
function scrollLeft() {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1; // Go to the last slide
        slider.scrollTo({
            left: slider.scrollWidth, // Scroll to the end
            behavior: "auto" // No smooth transition for reset
        });
    } else {
        slider.scrollBy({
            left: -window.innerWidth, // Move back by one screen width
            behavior: "smooth"
        });
    }
}

let timerId = setInterval(scrollRight, 7000); // Automatically scroll right

// Reset timer for automatic scrolling
function resetTimer() {
    clearInterval(timerId);
    timerId = setInterval(scrollRight, 7000);
}

// Event listeners for clicks
leftArrow.addEventListener('click', () => {
    scrollLeft();
    resetTimer();
});

rightArrow.addEventListener('click', () => {
    scrollRight();
    resetTimer();
});

// Shop Slider




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
