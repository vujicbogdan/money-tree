let income = document.getElementById("modal-income");
let outcome = document.getElementById("modal-outcome");
let incomeDisplay = document.getElementById("income-display");
let outcomeDisplay = document.getElementById("outcome-display");
let savingDisplay = document.getElementById("saving-display");
let progressBarTxt = document.getElementById("progress-bar-text");

// PROGRESS BAR FUNCTION
let i = 0;
function move() {
  if (i == 0) {
    i = 1;
    let elem = document.getElementById("myBar");
    let width = 1;
    let id = setInterval(frame, 10);
    function frame() {
      if (width >= 70) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

// SAVINGS FUNCTION
function Savings() {
  incomeDisplay.innerHTML = "$" + income.value;
  outcomeDisplay.innerHTML = "$" + outcome.value;
  savingDisplay.innerHTML = "$" + (income.value - outcome.value);
  progressBarTxt.innerHTML = "$" + (income.value - outcome.value);
  move();
}

// SIDEMENU FUNCION
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
