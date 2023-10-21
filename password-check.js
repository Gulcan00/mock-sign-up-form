const password = document.querySelector("#pwd");
const passwordConfirm = document.querySelector("#pwd-confirm");

function checkPassword(e) {
    if (e.target.value != passwordConfirm.value || e.target.value != password.value) {
        password.classList.add("error");
        passwordConfirm.classList.add("error");
    } else {
        password.classList.remove("error");
        passwordConfirm.classList.remove("error");
    }
}

password.addEventListener("input", checkPassword);
passwordConfirm.addEventListener("input", checkPassword);