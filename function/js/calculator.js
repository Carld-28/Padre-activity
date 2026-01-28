/*let currentInput = "";
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
}*/
let first_input = "";
let current_input = "";
let operator_input = "";
const display = document.getElementById("result");
const display_operator = document.getElementById("operator");

display.value = "0";

function normal(value) {
    if (value === "AC") {
        first_input = "";
        operator_input = "";
        current_input = "";
        display.value = "0";
        display_operator.value = "";
        return;
    }

    if (value === "C") {
        if (current_input.length === 1 && operator_input !== "") {//nu adda mamaysa a digit ken adda operator na palang
            current_input = "";
            display.value = "0";
            display_operator.value = operator_input;
            return;
        }

        if (current_input === "" && display_operator.value === operator_input) {//awan digit ken adda operator na palang
            display.value = first_input || "0";
            current_input = first_input;
            first_input = "";
            operator_input = "";
            display_operator.value = "";
            return;
        }

        if (current_input.length > 0) {//adda digit na
            current_input = current_input.slice(0, -1);
            display.value = current_input || "0";
        }
        return;
    }

    if (["+", "-", "*", "/"].includes(value)) {

        if (current_input === "") {
            first_input = "0";
        } else {
            first_input = current_input;
        }
        operator_input = value;
        display_operator.value = operator_input;
        current_input = "";
        display.value = "0";
        return;
    }

    if (value === "=") {
        if (current_input === "" || operator_input === "") return;

        let expression = first_input + operator_input + current_input;
        try {
            let result = eval(expression);
            display.value = result;
            first_input = "";
            operator_input = "";
            current_input = result.toString();
            display_operator.value = "";
        } catch {
            display.value = "Error";
            first_input = "";
            operator_input = "";
            current_input = "";
            display_operator.value = "";
        }
        return;
    }

    current_input += value;
    display.value = current_input;
}