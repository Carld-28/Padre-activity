function register() {
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const password_2 = document.getElementById('password_2').value;

    if (name.length === 0) {
        alert('Name is required');
        return;
    }

if (password.length === 0) {
        alert('Password is required');
        return;
    }

    if (password !== password_2) {
        alert('Password mismatch');
        return;
    }

    alert('Registration successful');
}
