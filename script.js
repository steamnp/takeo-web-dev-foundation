const toggle = document.querySelector(".toggle");
const input = document.querySelector("#passwordOne");

toggle.addEventListener("click", function () {
  if (input.type === "password") {
    input.type = "text";
    toggle.classList.remove("fa-eye");
    toggle.classList.add("fa-eye-slash");
  } else {
    input.type = "password";
    toggle.classList.remove("fa-eye-slash");
    toggle.classList.add("fa-eye");
  }
});

const toggle2 = document.querySelector(".toggle2");
const input2 = document.querySelector("#passwordTwo");
toggle2.addEventListener("click", function () {
  if (input2.type === "password") {
    input2.type = "text";
  } else {
    input2.type = "password";
  }
});
