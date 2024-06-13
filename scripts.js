document.addEventListener("DOMContentLoaded", () => {
    const signupLink = document.getElementById('signup-link');
    const loginLink = document.getElementById('login-link');
    const signupModal = document.getElementById('signup-modal');
    const loginModal = document.getElementById('login-modal');
    const closeSignup = document.getElementById('close-signup');
    const closeLogin = document.getElementById('close-login');
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');
    const jobOffers = document.getElementById('job-offers');

    signupLink.addEventListener('click', () => {
        signupModal.style.display = 'block';
    });

    loginLink.addEventListener('click', () => {
        loginModal.style.display = 'block';
    });

    closeSignup.addEventListener('click', () => {
        signupModal.style.display = 'none';
    });

    closeLogin.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == signupModal) {
            signupModal.style.display = 'none';
        } else if (event.target == loginModal) {
            loginModal.style.display = 'none';
        }
    });

    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const password = document.getElementById('signup-password').value;
        const repassword = document.getElementById('signup-repassword').value;

        if (password !== repassword) {
            alert("Passwords do not match!");
            return;
        }

        // Here you can add code to send the data to the server
        alert("Sign up successful!");
        signupModal.style.display = 'none';
    });

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        // Dummy check - replace with actual server-side validation
        if (email === "user@example.com" && password === "password") {
            alert("Login successful!");
            loginModal.style.display = 'none';
            jobOffers.style.display = 'block';
        } else {
            alert("Invalid email or password.");
        }
    });
});
