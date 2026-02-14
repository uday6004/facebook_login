document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the page from refreshing

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        alert("Login attempted with: " + email);
        // In a real app, you would send this to a backend server here.
    }
});
