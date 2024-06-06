
document.addEventListener('DOMContentLoaded', () => {
    // Handle the Google Sign-In response
    window.handleCredentialResponse = function(response) {
        const data = jwt_decode(response.credential);
        console.log(data);
        // Here you can handle the data received from Google and proceed accordingly.
        // Redirect to the main page or do further authentication if required.
        window.location.href = 'main.html';
    };
    
    // Handle the login form submission if present
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
});

// Function to handle the login form submission
function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const storedUser = localStorage.getItem(username);

    if (storedUser && JSON.parse(storedUser).password === password) {
        window.location.href = 'main.html';
    } else {
        alert('Invalid username or password');
    }
}

// Function to decode JWT tokens (JWT Decode library)
// This function can be replaced with the jwt-decode library if you prefer
function jwt_decode(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}
