let bigLetters = document.getElementById("big");
let smallLetters = document.getElementById("small");
let numbers = document.getElementById("numbers");
let minimum7 = document.getElementById("minimum7");
let nextButton = document.getElementById("nextBtn");
let pwd = document.getElementById("pwd");

pwd.onkeyup = function () {
  // Validate lowercase letters
  let lowerCaseLetters = /[a-z]/g;
  if (pwd.value.match(lowerCaseLetters)) {
    smallLetters.style.color = "#8cb050";
  } else {
    smallLetters.style.color = "red";
  }

  // Validate capital letters
  let upperCaseLetters = /[A-Z]/g;
  if (pwd.value.match(upperCaseLetters)) {
    bigLetters.style.color = "#8cb050";
  } else {
    bigLetters.style.color = "red";
  }

  // Validate numbers
  let numbersReg = /[0-9]/g;
  if (pwd.value.match(numbersReg)) {
    numbers.style.color = "#8cb050";
  } else {
    numbers.style.color = "red";
  }

  // Validate length
  if (pwd.value.length >= 7) {
    minimum7.style.color = "#8cb050";
  } else {
    minimum7.style.color = "red";
  }
};
