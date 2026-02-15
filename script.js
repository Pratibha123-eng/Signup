document.getElementById("signupForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message");

  message.style.color = "black";
  message.innerText = "Submitting...";

  try {
    const response = await fetch("https://zbexjlshb6.execute-api.ap-south-1.amazonaws.com/user/UserSignupFunction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email })
    });

    if (response.ok) {
      message.style.color = "green";
      message.innerText = "Signup successful! Check your email.";
    } else {
      message.style.color = "red";
      message.innerText = "Signup failed.";
    }
  } catch (err) {
    message.style.color = "red";
    message.innerText = "Error connecting to server.";
  }
});
