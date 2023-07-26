document.getElementById("signup").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission
  // Get form values
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Create request payload
  var payload = {
    email: email,
    password: password,
  };

  console.log(payload);

  // Make an API request
  fetch("#", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Add any required authentication headers (e.g., API key or access token)
      // Authorization: "Bearer YOUR_API_KEY"
    },
    body: JSON.stringify(payload),
  })
    .then(function (response) {
      // Handle the response
      if (response.ok) {
        // Successful sign-up
        alert("Sign up successful! Proceed to Login");
        window.location.replace("./login");

        // Perform any additional actions (e.g., redirect to a new page)
      } else {
        // Sign-up failed
        alert("Sign up failed. Please try again.");
      }
    })
    .catch(function (error) {
      // Handle error
      console.log("Error:", error);
      alert("An error occurred. Please try again later.");
    });
});
