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
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    if (localStorage.getItem(username)) {
        alert('Username already exists');
    } else {
        const user = { username, email, password };
        localStorage.setItem(username, JSON.stringify(user));
        window.location.href = 'main.html';
    }
}
