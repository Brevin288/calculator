const previousOperandText = document.getElementById("previousOperand");
const currentOperandText = document.getElementById("currentOperand");
const buttons = document.querySelectorAll(".btn");

let previousOperand = "";
let currentOperand = "0";
let operation = null;

function updateDisplay() {
  currentOperandText.textContent = currentOperand;
  previousOperandText.textContent = operation ? `${previousOperand} ${operation}` : "";
}

function clearAll() {
  previousOperand = "";
  currentOperand = "0";
  operation = null;
}

function deleteLast() {
  if (currentOperand.length === 1 || currentOperand === "-" ) {
    currentOperand = "0";
    return;
  }
  currentOperand = currentOperand.slice(0, -1);
}

function appendNumber(number) {
  if (number === "." && currentOperand.includes(".")) return;
  if (currentOperand === "0" && number !== ".") {
    currentOperand = number;
  } else {
    currentOperand += number;
  }
}

function chooseOperation(op) {
  if (currentOperand === "") return;
  if (previousOperand !== "") {
    compute();
  }
  operation = op;
  previousOperand = currentOperand;
  currentOperand = "0";
}

function compute() {
  let result;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return;

  switch (operation) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      result = current === 0 ? "Error" : prev / current;
      break;
    case "%":
      result = prev % current;
      break;
    default:
      return;
  }

  currentOperand = result.toString();
  operation = null;
  previousOperand = "";
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.action;
    const value = button.dataset.value;

    switch (action) {
      case "number":
        appendNumber(value);
        break;
      case "operation":
        chooseOperation(value);
        break;
      case "clear":
        clearAll();
        break;
      case "delete":
        deleteLast();
        break;
      case "calculate":
        compute();
        break;
      default:
        return;
    }

    updateDisplay();
  });
});

clearAll();
updateDisplay();
