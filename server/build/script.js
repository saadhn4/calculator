let calculation = localStorage.getItem("calculation") || "";

//displaying the result after refreshing
displayCalculation();

function updateCalculation(value) {
  calculation += value;
  // console.log(calculation);
  displayCalculation();
  localStorage.setItem("calculation", calculation);
}

function displayCalculation() {
  let pElement = document.querySelector(".js-calculation");
  pElement.innerHTML = calculation;
}
