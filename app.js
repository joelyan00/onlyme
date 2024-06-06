document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }
});

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

function handleRegister(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (localStorage.getItem(username)) {
        alert('Username already exists');
    } else {
        const user = { username, password };
        localStorage.setItem(username, JSON.stringify(user));
        window.location.href = 'main.html';
    }
}

function onGoogleSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    const username = profile.getName();
    const email = profile.getEmail();

    if (localStorage.getItem(email)) {
        // User exists, log them in
        window.location.href = 'main.html';
    } else {
        // New user, create an account and log them in
        const user = { username, email, password: 'google-auth' };
        localStorage.setItem(email, JSON.stringify(user));
        window.location.href = 'main.html';
    }
}
