const students = [
    { name: "Ana", scores: [85, 90, 88], present: true },
    { name: "Ben", scores: [70, 75, 72], present: false },
    { name: "Cara", scores: [95, 92, 94], present: true },
    { name: "Daniel", scores: [60, 65, 70], present: true },
    { name: "Ella", scores: [88, 85, 90], present: true },
    { name: "Felix", scores: [78, 80, 82], present: false },
    { name: "Grace", scores: [92, 89, 94], present: true },
    { name: "Hannah", scores: [73, 70, 68], present: false },
    { name: "Ivan", scores: [81, 84, 79], present: true },
    { name: "Julia", scores: [96, 98, 97], present: true }
];

function getAverage(scores) {//isu ti magi pla plas yanti scores
    let total = 0;
    for (let i in scores) {
        total += scores[i];
    }
    return total / scores.length; //i divide na jay totsl score nu manu nga scores wennu grade ti adda dijay
}

function showError(message) {
    document.getElementById("error-message").innerText = message;//isu ti mangi kabil ti error message
}

function addRow(student) {
    const tbody = document.getElementById("students");//isu ti agi ca call ti students 

    const average = getAverage(student.scores);//taga ala average score ti student
    const remarks = average >= 75 ? "Passed" : "Failed";//isu ti mangi determine no passed wenno failed ti student base iti average score na

    const row = document.createElement("tr");//taga create ti row element para iti table
    row.innerHTML = `
        <td>${student.name}</td>
        <td>${student.scores[0]}</td>
        <td>${student.scores[1]}</td>
        <td>${student.scores[2]}</td>
        <td>${average.toFixed(2)}</td>
        <td>${remarks}</td>
    `;//isu ti mangi set ti innerHTML ti row element a naglaon ti student name, scores, average score, ken remarks

    tbody.appendChild(row);//isu ti mangi append ti row element iti tbody ti table
}

function displayStudents(list) {//taga display ti amin a students iti table, isu ti mangi clear ti tbody ken error message sakbay nga i add ti rows para iti tunggal student iti list a naipasa.
    const tbody = document.getElementById("students");//isu ti mangi connect yanti html
    tbody.innerHTML = "";// ikkaten na amin nga adjay yanti tbody(table body) tapno maipakita ti updated list ti students
    showError("");//agipak pakita ti error message a awan, isu ti mangi clear ti error message sakbay nga i display ti students

    for (let i in list) {//isu ti mangi loop iti list ti students ken i add ti row para iti tunggal student
        addRow(list[i]);
    }
}

function search(students) {//isu ti taga search ti student by name, isu ti mangi get ti input value, clear ti tbody ken error message, ken i loop iti students tapno ma find no adda student a nagan na ket ag match iti input. No adda match, i add ti row para iti student ken i set found variable a true. No awan match, i display ti error message a "Student not found".
    const input = document.getElementById("output").value.toLowerCase();//isu ti mangi get ti input value ken i convert iti lowercase tapno case-insensitive ti search
    const tbody = document.getElementById("students");//isu ti mangi connect yanti html
    tbody.innerHTML = "";
    showError("");

    let found = false;//isu ti mangi detect nu adda nabirukan na

    for (let i in students) {//isu ti taga check ti student sag gaysa
        if (students[i].name.toLowerCase() === input) {//ta haan a case sensitive so usaren tay jay .tolowercase
            addRow(students[i]);
            found = true;
            break;
        }
    }

    if (!found) {//no haan na nabirukan jay student
        document.getElementById("error-message").innerText = "Student not found";
        document.getElementById("error-message").style.visibility = "visible";
    }
}

function displaypresent(students) {//taga display ti present
    const tbody = document.getElementById("students");
    tbody.innerHTML = "";
    showError("");

    let hasData = false;

    for (let i in students) {//i loop na ti students ken i check no adda ba ti present kinyada, no adda ket i add ti row para iti student ken i set hasData variable a true. No awan present students, i display ti error message a "No present students found".
        if (students[i].present === true) {
            addRow(students[i]);
            hasData = true;
        }
    }

    if (!hasData) showError("No present students found");//no awan ti present kinyada
}

function displayabsent(students) {//para display ti absent
    const tbody = document.getElementById("students");
    tbody.innerHTML = "";
    showError("");

    let hasData = false;

    for (let i in students) {//i llop na nu adda ti absent kinyada
        if (students[i].present === false) {
            addRow(students[i]);
            hasData = true;
        }
    }

    if (!hasData) showError("No absent students found");//ibaga na no awan ti absent kinyada
}

function displaypassed(students) {
    const tbody = document.getElementById("students");
    tbody.innerHTML = "";
    showError("");

    let hasData = false;

    for (let i in students) {//taga kita ti naka passa nga student
        if (getAverage(students[i].scores) >= 75) {
            addRow(students[i]);
            hasData = true;
        }
    }

    if (!hasData) showError("No passed students found");
}

function displayfailed(students) {
    const tbody = document.getElementById("students");
    tbody.innerHTML = "";
    showError("");

    let hasData = false;

    for (let i in students) {//loop na kitan na nu adda ti grades nga nabab baba ngem 75 
        if (getAverage(students[i].scores) < 75) {
            addRow(students[i]);
            hasData = true;
        }
    }

    if (!hasData) showError("No failed students found");
}

window.onload = function () {//automatik na nga i display ti students
    displayStudents(students);
};