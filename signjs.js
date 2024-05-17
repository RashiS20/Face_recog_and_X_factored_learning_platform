document
  .getElementById("signupForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const errorMessage = document.getElementById("error-message");

    if (password !== confirmPassword) {
      errorMessage.textContent = "Passwords do not match.";
      errorMessage.style.display = "block";
      return;
    }

    const response = await fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password, confirmPassword }),
    });

    const result = await response.text();

    if (response.status === 201) {
      alert("Signup successful!");
      window.location.href = "login.html"; // Redirect to login page after successful signup
    } else {
      errorMessage.textContent = result;
      errorMessage.style.display = "block";
    }
  });

// document
//   .getElementById("signupForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();
//     validateSignupForm();
//   });

// function validateSignupForm() {
//   var username = document.getElementById("username").value;
//   var email = document.getElementById("email").value;
//   var password = document.getElementById("password").value;
//   var confirmPassword = document.getElementById("confirm-password").value;
//   var errorMessage = document.getElementById("error-message");

//   if (
//     username === "" ||
//     email === "" ||
//     password === "" ||
//     confirmPassword === ""
//   ) {
//     errorMessage.textContent = "All fields are required.";
//     errorMessage.style.display = "block";
//     return false;
//   }

//   if (password.length < 6) {
//     errorMessage.textContent = "Password must be at least 6 characters long.";
//     errorMessage.style.display = "block";
//     return false;
//   }

//   if (password !== confirmPassword) {
//     errorMessage.textContent = "Passwords do not match.";
//     errorMessage.style.display = "block";
//     return false;
//   }

//   errorMessage.style.display = "none";
//   alert("Signup successful!");

//   return true;
// }
