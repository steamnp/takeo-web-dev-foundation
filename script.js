var toggle = document.querySelector(".toggle");
var passOne = document.getElementById("passwordOne");
var toggleTwo = document.querySelector(".toggle2");
var passTwo = document.getElementById("passwordTwo");
var submitBtn = document.querySelector(".input-btn");
var output = document.querySelector(".alert-box");
//console.log(toggle);
toggle.addEventListener("click", function (fun) {
  if (passOne.type === "password") {
    passOne.type = "text";
    toggle.classList.add("fa-eye-slash");
    toggle.classList.remove("fa-eye");
  } else {
    passOne.type = "password";
  }
});
toggleTwo.addEventListener("click", function () {
  if (passTwo.type === "password") {
    passTwo.type = "text";
    toggleTwo.classList.add("fa-eye-slash");
    toggleTwo.classList.remove("fa-eye");
  } else {
    passTwo.type = "password";
  }
});
//const output = document.querySelector(".alert-box");
submitBtn.addEventListener("click", function (fun) {
  output.innerHTML = "";
  const p = document.createElement("p");
  if (passOne.value === passTwo.value) {
    p.innerHTML = "Success";
  } else {
    p.innerHTML = "Passwords do not match";
  }
  output.appendChild(p);
});
