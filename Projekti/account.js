// Register function to store user data
function register(event) {
    event.preventDefault();

    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="pass"]').value;
    const confirmPassword = document.querySelector('input[name="cpass"]').value;

    if (password === confirmPassword) {
        localStorage.setItem("username", name);
        localStorage.setItem("email", email);
        localStorage.setItem("isLoggedIn", "true");

        alert("Registration successful!");
        window.location.href = "login.html";
    } else {
        alert("Passwords do not match!");
    }
}

// Login function to verify user and set login state
function login(event) {
    event.preventDefault();

    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="pass"]').value;

    if (email === localStorage.getItem("email") && password) {
        localStorage.setItem("isLoggedIn", "true");
        alert("Login successful!");
        window.location.href = "home.html";
    } else {
        alert("Invalid email or password!");
    }
}
