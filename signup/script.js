function togglePasswordVisibility() {
  var passwordInput = document.getElementById("password");
  var toggleIcon = document.querySelector(".password-toggle i");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
  }
}

function checkPasswordMatch() {
  var passwordInput = document.getElementById("password");
  var confirmPasswordInput = document.getElementById("confirm-password");
  var errorElement = document.getElementById("password-match-error");

  if (passwordInput.value !== confirmPasswordInput.value) {
    errorElement.style.display = "block";
    confirmPasswordInput.classList.remove("password-match");
    confirmPasswordInput.style.borderColor = "red";
  } else {
    errorElement.style.display = "none";
    confirmPasswordInput.classList.add("password-match");
    confirmPasswordInput.style.borderColor = "green";
  }
}
