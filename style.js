const username = "teju";
const password = "pass@20";

document.querySelector('.form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const enteredUsername = document.getElementById('email').value;
  const enteredPassword = document.getElementById('pass').value;

  if (enteredUsername === username && enteredPassword === password) {
    alert("Login successfully");
    window.location.href = "index.html"; // Redirect to another page
  } else {
    alert("Wrong credentials!");
  }
});
