// Select the display element correctly
const display = document.querySelector(".display");

// send value to the input box
function appendToDisplay(input) {
  display.value += input;
}

// Clear the the input box
function clearDisplay() {
  display.value = "";
}

// To Calculate 
function calculate() {
  try {
    const result = new Function("return " + display.value)();
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}

// calculate percent
function percent() {
  try {
    const result = parseFloat(display.value) / 100;
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}

// ✅ Handle keyboard input
document.addEventListener("keydown", (event) => {
  const key = event.key;

  // Allow numbers, operators, and dot
  if (/[0-9+\-*/.%]/.test(key)) {
    appendToDisplay(key);
  }
  // equal to (=)
  else if (key === "=") {
    event.preventDefault();
    calculate();
  }
});
