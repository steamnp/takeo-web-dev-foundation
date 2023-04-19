document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".toggle");
  const input = document.querySelector("#passwordOne");
  const toggle2 = document.querySelector(".toggle2");
  const input2 = document.querySelector("#passwordTwo");
  const submitBtn = document.querySelector(".input-btn");
  const alertBox = document.querySelector(".alert-box");

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

  toggle2.addEventListener("click", function () {
    if (input2.type === "password") {
      input2.type = "text";
      toggle2.classList.remove("fa-eye");
      toggle2.classList.add("fa-eye-slash");
    } else {
      input2.type = "password";
      toggle2.classList.remove("fa-eye-slash");
      toggle2.classList.add("fa-eye");
    }
  });

  input.addEventListener("input", validatePasswords);
  input2.addEventListener("input", validatePasswords);

  function validatePasswords() {
    if (input.value !== input2.value) {
      alertBox.innerHTML = "<p>Passwords do not match</p>";
      submitBtn.disabled = true;
    } else {
      alertBox.innerHTML = "<p>Passwords match</p>";
      submitBtn.disabled = false;
    }
  }

  // Prevent form submission if passwords don't match
  submitBtn.addEventListener("click", function (event) {
    if (input.value !== input2.value) {
      event.preventDefault();
      alertBox.innerHTML = "<p>Please recheck your passwords</p>";
    }
  });
});
