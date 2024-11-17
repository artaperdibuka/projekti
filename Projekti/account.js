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
        window.Swal.fire({
            icon: 'success',
            title: 'Message',
            text: 'Register successful!',
            confirmButtonText: 'OK'
        }).then(() => {
            // Zbraz fushat pas klikimit OK
            window.location.href = "login.html";
        });

    } else {
     
        window.Swal.fire({
            icon: 'success',
            title: 'try again',
            text: 'Passwords do not match!',
            confirmButtonText: 'OK'
        }).then(() => {
            // Zbraz fushat pas klikimit OK
            name.value = '';
            email.value = '';
            password.value = '';
            confirmPassword.value = '';
        });
    }
}

// Login function to verify user and set login state
function login(event) {
    event.preventDefault();

    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="pass"]').value;

    if (email === localStorage.getItem("email") && password) {
        localStorage.setItem("isLoggedIn", "true");
        window.Swal.fire({
            icon: 'success',
            title: 'Message',
            text: 'Login successful!',
            confirmButtonText: 'OK'
        }).then(() => {
            // Zbraz fushat pas klikimit OK
            window.location.href = "home.html";
        });
        
    } else {
      
        window.Swal.fire({
            icon: 'success',
            title: 'try again',
            text: 'Invalid email or password.',
            confirmButtonText: 'OK'
        }).then(() => {
            // Zbraz fushat pas klikimit OK
            email.value = '';
            password.value = '';
        });
    }
}
