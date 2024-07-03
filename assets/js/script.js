function generateTable() {
  // Récupération des valeurs hauteur et largeur
  const width = parseInt(document.getElementById("width").value);
  const height = parseInt(document.getElementById("height").value);

  // Ref vers le conteneur de la table dans le DOM
  const tableContainer = document.getElementById("table-container");

  // Création de l'elem de tableau
  const table = document.createElement("table");

  // Boucle pour créer les lignes et les cellules
  for (let i = 0; i < height; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < width; j++) {
      const cell = document.createElement("td");

      // Calculer de la valeur à afficher avec incrémentation par rapport à la diagonale
      const value = (j * height + i) % (width * height);

      // ajout du texte à la cellule
      cell.textContent = value.toString();

      //ajout de la cellule à la ligne
      row.appendChild(cell);
    }

    // ajout de la ligne au tableau
    table.appendChild(row);
  }

  // clean du contenu précédent de la table
  tableContainer.innerHTML = "";

  // ajout du tableau généré
  tableContainer.appendChild(table);
}
