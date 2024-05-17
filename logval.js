document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    validateForm();
  });

function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var errorMessage = document.getElementById("error-message");

  if (username === "" || password === "") {
    errorMessage.textContent = "All fields are required.";
    errorMessage.style.display = "block";
    return false;
  }

  if (password.length < 6) {
    errorMessage.textContent = "Password must be at least 6 characters long.";
    errorMessage.style.display = "block";
    return false;
  }

  errorMessage.style.display = "none";
  alert("Login successful!");

  return true;
}
