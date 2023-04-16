console.dir(document);
const passwordOne = document.getElementById("password1");
console.log(passwordOne);
// select password1 input and assign to passwordOne variable
// select password2 input and assign to passwordTwo variable
const passwordTwo = document.getElementById("password2");
console.log(passwordTwo);
// select toggle span and assign to toggle variable
const toggleOne = document.querySelector(".toggle");
console.log(toggleOne);
// select toggle2 input and assign to toggleTwo variable
const toggleTwo = document.querySelector(".toggle2");
console.log(toggleTwo);
// Attach event listener to toggle and toggleTwo
toggleOne.addEventListener("click", function () {
  console.log(passwordOne);
  passwordOne.type = passwordOne.type === "password" ? "text" : "password";
});

toggleTwo.addEventListener("click", function () {
  console.log(passwordTwo);
  passwordTwo.type = passwordTwo.type === "password" ? "text" : "password";
});
// document: => WEB API

// When we click on eye Button, we need to able to see password

// click, onchange
// toggle.addEventListener('click', function () {
//   console.log('I am clicked!')
// })
// callback function
// A function without name: Anonymous function

// console.log(toggle)

// select submit button from HTML and attach event listener to it
const submitBtn = document.querySelector(".input-btn");
const errorBox = document.getElementById("error-box");
console.log(submitBtn);
submitBtn.addEventListener("click", function (event) {
  const password1 = document.querySelector("#password1").value;
  const password2 = document.querySelector("#password2").value;

  if (password1 !== password2) {
    errorBox.style.display = "block";
    event.preventDefault();
  } else {
    errorBox.style.display = "none";
    alert("Form submitted!");
  }
});
// check password and confirm password and display message
