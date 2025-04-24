// script.js
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clearBtn = document.getElementById("clear");
const equalBtn = document.getElementById("equal");

let currentInput = "";

buttons.forEach(button => {
  const value = button.getAttribute("data-value");

  if (value) {
    button.addEventListener("click", () => {
      currentInput += value;
      display.value = currentInput;
    });
  }
});

clearBtn.addEventListener("click", () => {
  currentInput = "";
  display.value = "";
});

equalBtn.addEventListener("click", () => {
  try {
    const result = eval(currentInput);
    display.value = result;
    currentInput = result.toString();
  } catch (error) {
    display.value = "Error";
    currentInput = "";
  }
});
