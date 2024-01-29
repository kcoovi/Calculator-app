let displayValue = "";

function appendToDisplay(value) {
  displayValue += value;
  updateDisplay();
}

function clearDisplay() {
  displayValue = "";
  updateDisplay();
}

function calculate() {
  try {
    displayValue = eval(displayValue);
    updateDisplay();
  } catch (error) {
    displayValue = "Error";
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById("display").value = displayValue;
}

function deleteLastDigit() {
  displayValue = displayValue.slice(0, -1);
  updateDisplay();
}
