let table = document.createElement("table");
for (let i = 0; i < 10; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < 10; j++) {
        let cellValue = i * 10 + j + 1;
        let cell = document.createElement("td");
        cell.textContent = cellValue;
        row.appendChild(cell);
    }
    table.appendChild(row);
}
document.body.appendChild(table);
