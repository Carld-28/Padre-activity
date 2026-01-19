function register() {
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const password_2 = document.getElementById('password_2').value;
        const errorMessage = document.getElementById("error");

    if (name.length === 0) {
        errorMessage.innerText = "Name is required";
        errorMessage.style.visibility = "visible";
        return;
    }

if (password.length === 0) {
        errorMessage.innerText = "Password is required";
        errorMessage.style.visibility = "visible";
        return;
    }

    if (password !== password_2) {
        errorMessage.innerText = "Password mismatch";
        errorMessage.style.visibility = "visible";
        return;
    }
    else
    alert('Registration successful');
}
