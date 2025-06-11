window.addEventListener('DOMContentLoaded', () => {
  const existingBtn = document.getElementById("existing");
  if (localStorage.getItem("username") && localStorage.getItem("password")) {
    existingBtn.style.display = "inline-block";
  }

  existingBtn.addEventListener('click', () => {
    let username = localStorage.getItem("username");
    alert(`Logged in as ${username}`);
  });
});

document.getElementById("submit").addEventListener('click', (e) => {
  e.preventDefault(); // Fix: use 'e' correctly

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const checkbox = document.getElementById("checkbox");

  alert(`Logged in as ${username}`);

  if (checkbox.checked) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }
});
