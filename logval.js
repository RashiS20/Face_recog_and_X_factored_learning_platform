document
  .getElementById("loginForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const result = await response.text();

    if (response.status === 200) {
      alert("Login successful!");
      // Redirect or load the dashboard/home page here
    } else {
      errorMessage.textContent = result;
      errorMessage.style.display = "block";
    }
  });

// document
//   .getElementById("loginForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();
//     validateForm();
//   });

// function validateForm() {
//   var username = document.getElementById("username").value;
//   var password = document.getElementById("password").value;
//   var errorMessage = document.getElementById("error-message");

//   if (username === "" || password === "") {
//     errorMessage.textContent = "All fields are required.";
//     errorMessage.style.display = "block";
//     return false;
//   }

//   if (password.length < 6) {
//     errorMessage.textContent = "Password must be at least 6 characters long.";
//     errorMessage.style.display = "block";
//     return false;
//   }

//   errorMessage.style.display = "none";
//   alert("Login successful!");

//   return true;
// }
