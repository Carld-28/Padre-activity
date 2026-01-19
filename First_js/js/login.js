    function login() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const errorMessage = document.getElementById("error");



        if (username.length === 0 || password.length === 0) {
            error.innerText = "Username and Password cannot be empty.";
            error.style.visibility = "visible";
            return;
        }

        if (username === 'admin' && password === 'password') {
            alert('Login successful!');
        } else {
            error.innerText = "Invalid username or password.";
            error.style.visibility = "visible";
        }
    }
