// Singleton Class for Login Session
class LoginSession {
  constructor(username, role) {
    if (LoginSession.instance) {
      console.log("Existing LoginSession used");
      return LoginSession.instance;
    }

    this.username = username;
    this.role = role;
    console.log("New LoginSession created");

    LoginSession.instance = this;
  }

  getUserInfo() {
    return `Welcome, ${this.username}! Logged in as ${this.role}.`;
  }
}

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const messageDiv = document.getElementById("message");

  let role;
  if (username === "admin" && password === "1234") {
    role = "Admin";
  } else if (username && password) {
    role = "Customer";
  } else {
    messageDiv.style.color = "red";
    messageDiv.textContent = "Please enter username and password.";
    return;
  }

  const session = new LoginSession(username, role);
  messageDiv.style.color = "green";
  messageDiv.textContent = session.getUserInfo();
}
