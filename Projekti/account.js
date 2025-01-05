// Register function to store user data
function register(event) {
    event.preventDefault();

    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="pass"]').value;
    const confirmPassword = document.querySelector('input[name="cpass"]').value;

    if (password === confirmPassword) {
        // Store user data in localStorage (for demonstration purposes only)
        localStorage.setItem("username", name);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password); // Store password (not secure for production)
        localStorage.setItem("isLoggedIn", "true");

        // Show success message
        window.Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Registration successful!',
            confirmButtonText: 'OK'
        }).then(() => {
            // Redirect to login page
            window.location.href = "login.html";
        });
    } else {
        // Show error message for password mismatch
        window.Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Passwords do not match!',
            confirmButtonText: 'OK'
        }).then(() => {
            // Clear form fields
            document.querySelector('input[name="name"]').value = '';
            document.querySelector('input[name="email"]').value = '';
            document.querySelector('input[name="pass"]').value = '';
            document.querySelector('input[name="cpass"]').value = '';
        });
    }
}

// Login function to verify user and set login state
function login(event) {
    event.preventDefault();

    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="pass"]').value;

    // Retrieve stored user data
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (email === storedEmail && password === storedPassword) {
        // Set login state
        localStorage.setItem("isLoggedIn", "true");

        // Show success message
        window.Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Login successful!',
            confirmButtonText: 'OK'
        }).then(() => {
            // Redirect to home page
            window.location.href = "home.html";
        });
    } else {
        // Show error message for invalid credentials
        window.Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Invalid email or password.',
            confirmButtonText: 'OK'
        }).then(() => {
            // Clear form fields
            document.querySelector('input[name="email"]').value = '';
            document.querySelector('input[name="pass"]').value = '';
        });
    }
}