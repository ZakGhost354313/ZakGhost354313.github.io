const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    if (unpw === "uname = "+username+";password = "+password) {
        location.reload();
    }
    else if (username === ${ secret.user} && password === ${ secret.pass}) {
        document.cookie = "uname = "+username+";password = "+password;
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
//view rawlogin-page.js hosted with ❤ by GitHub
