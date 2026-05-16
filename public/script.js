const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");
const messageDiv = document.getElementById("message");

// Register
registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("regUsername").value;
  const password = document.getElementById("regPassword").value;

  const res = await fetch("/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });

  const data = await res.json();
  messageDiv.textContent = data.message || data.error;
});

// Login
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  const res = await fetch("/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });

  const data = await res.json();
  if(data.token) {
    messageDiv.textContent = "Login successful! 🎉";
    localStorage.setItem("token", data.token);
  } else {
    messageDiv.textContent = data.error;
  }
});
