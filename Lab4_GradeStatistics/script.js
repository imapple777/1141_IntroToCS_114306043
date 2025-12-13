let rowCount = 0;
const mathInput = document.getElementById("mathInput");
const englishInput = document.getElementById("englishInput");
const submitBtn = document.getElementById("submitBtn");
const gradeBody = document.getElementById("gradeBody");

const mathAvg = document.getElementById("mathAvg");
const englishAvg = document.getElementById("englishAvg");
const overallAvg = document.getElementById("overallAvg");

submitBtn.addEventListener("click", function () {
    const math = Number(mathInput.value);
    const english = Number(englishInput.value);

    if (isNaN(math) || isNaN(english)) {
        alert("Please enter valid numbers.");
        return;
    }

    rowCount++; // ⭐ 第幾筆資料

    const avg = ((math + english) / 2).toFixed(2);

    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${rowCount}</td>
        <td>${math}</td>
        <td>${english}</td>
        <td>${avg}</td>
    `;
    gradeBody.appendChild(row);

    updateColumnAverages();

    mathInput.value = "";
    englishInput.value = "";
});

function updateColumnAverages() {
    const rows = gradeBody.getElementsByTagName("tr");
    let mathSum = 0;
    let englishSum = 0;

    for (let i = 0; i < rows.length; i++) {
        mathSum += Number(rows[i].children[1].innerText);
        englishSum += Number(rows[i].children[2].innerText);
    }

    const count = rows.length;

    if (count > 0) {
        mathAvg.innerText = (mathSum / count).toFixed(2);
        englishAvg.innerText = (englishSum / count).toFixed(2);
        overallAvg.innerText = ((mathSum + englishSum) / (count * 2)).toFixed(2);
    }
}
