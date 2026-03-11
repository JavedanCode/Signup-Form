const password = document.querySelector("#pass");
const confirmPassword = document.querySelector("#pass-confirm");
const error = document.querySelector(".password-error");

function checkPassword() {
  if (confirmPassword.value === "") {
    confirmPassword.setCustomValidity("");
    error.textContent = "";
    return;
  } else if (password.value !== confirmPassword.value) {
    confirmPassword.setCustomValidity("Passwords do not match");
    error.textContent = "Passwords do not match";
  } else {
    confirmPassword.setCustomValidity("");
    error.textContent = "";
  }
}

password.addEventListener("input", checkPassword);
confirmPassword.addEventListener("input", checkPassword);
