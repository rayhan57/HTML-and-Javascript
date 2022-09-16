const email = document.forms["form"]["email"];
const password = document.forms["form"]["password"];
const EmailError = document.querySelector(".email_error");
const PasswordError = document.querySelector(".password_error");

function valid() {
  if (email.value.length < 8) {
    email.style.border = "1px solid red";
    EmailError.style.display = "block";
    email.focus();
    return false;
  }
  if (password.value.length < 6) {
    password.style.border = "1px solid red";
    PasswordError.style.display = "block";
    password.focus();
    return false;
  }
}

email.addEventListener("textInput", email_valid);
password.addEventListener("textInput", password_valid);

function email_valid() {
  if (email.value.length > 8) {
    email.style.border = "1px solid black";
    EmailError.style.display = "none";
    return true;
  }
}
function password_valid() {
  if (password.value.length > 8) {
    password.style.border = "1px solid black";
    PasswordError.style.display = "none";
    return true;
  }
}
