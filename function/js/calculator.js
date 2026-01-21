let currentInput = "";
const display = document.getElementById("result");
function normal(value) {
    if (value === "AC") {
        currentInput = "";
        display.value = "";
    } else if (value === "C") {
        currentInput = currentInput.slice(0, -1);
        display.value = currentInput;
    } else if (value === "=") {
        try {
            currentInput = eval(currentInput).toString();
            display.value = currentInput;
        } catch (error) {
            display.value = "Error";
            currentInput = "";
        }
    } else {
        currentInput += value;
        display.value = currentInput;
    }
}
