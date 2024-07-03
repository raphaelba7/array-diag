function generateTable() {
  // Récupération des valeurs hauteur et largeur
  const width = parseInt(document.getElementById("width").value);
  const height = parseInt(document.getElementById("height").value);

  const tableContainer = document.getElementById("table-container");
  const table = document.createElement("table");
  let tableArray = Array.from(Array(height), () => Array(width).fill(null));

  let value = 0;
  let row = 0;
  let col = 0;

  // Remplir la diagonale principale
  while (row < height && col < width) {
    tableArray[row][col] = value++;
    row++;
    col++;
  }

  // Remplir les autres diagonales
  for (let startRow = 1; startRow < height; startRow++) {
    let r = startRow;
    let c = 0;
    while (r < height && c < width) {
      tableArray[r][c] = value++;
      r++;
      c++;
    }
  }
  for (let startCol = 1; startCol < width; startCol++) {
    let r = 0;
    let c = startCol;
    while (r < height && c < width) {
      tableArray[r][c] = value++;
      r++;
      c++;
    }
  }

  // Créer le tableau HTML à partir du tableau rempli
  for (let i = 0; i < height; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < width; j++) {
      const cell = document.createElement("td");
      cell.textContent = tableArray[i][j] !== null ? tableArray[i][j] : "";
      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  // Afficher le tableau généré
  tableContainer.innerHTML = "";
  tableContainer.appendChild(table);
}
