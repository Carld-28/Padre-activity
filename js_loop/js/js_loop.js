const output = document.getElementById("output");

function clearOutput(title) {
    output.textContent = title + "\n-----------------------\n";
}
    
function forloop() {
    clearOutput("FOR loop");
    for (let i = 1; i <= 10; i++) {
        output.textContent += `${i}\n`;
    }
}

function whileloop() {
    clearOutput("WHILE loop");
    let i = 20;
    while (i >= 1) {
        output.textContent += `${i}\n`;
        i--;
    }
}

function doWhileloop() {
    clearOutput("DO ... WHILE loop");
    let i = 15;
    do {
        output.textContent += `${i}\n`;
        i--;
    } while (i >= 1);
}

function forOfloop() {
    clearOutput("FOR ... OF loop");
    const fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple", "Grapes", "Strawberry", "Watermelon"];
    for (const fruit of fruits) {
        output.textContent += `${fruit}\n`;
    }
}

function forInloop() {
    clearOutput("FOR ... IN loop");
    const person = {
        name: "Carmelo Dave A. Padre",
        age: 21,
        course: "IT",
        section: "2_B"
    };
    for (const key in person) {
        output.textContent += `${key}: ${person[key]}\n`;
    }
}

function   foreachloop() {
    clearOutput("FOR ... EACH loop");
    const number = [10 , 20, 30 , 40, 50 ,60 , 70, 80, 90, 100];
    number.forEach((num, index) =>  {
        output.textContent += `Index: ${index}, Value: ${num}\n`;
    });
}
