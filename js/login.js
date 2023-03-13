let username = document.getElementById("username");
let password = document.getElementById("pwd");
let loginBtn = document.getElementById("submit");
loginBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (username.value === "admin" && password.value === "admin") {
    location.href = "./user.html";
  } else alert("Unknown user");
});
