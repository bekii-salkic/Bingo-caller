// Skapa ett Bingo-board
const name = prompt("Skriv ditt namn eller kod:");
document.getElementById("playerName").innerText = `Spelare: ${name}`;

const board = document.getElementById("bingoBoard");
const numbers = [];

// Funktion för att generera bingo-nummer för varje kolumn (B, I, N, G, O)
function generateBingoBoard() {
  // Definiera kolumnerna för Bingo
  const columns = {
    B: [],
    I: [],
    N: [],
    G: [],
    O: []
  };

  // Generera nummer för varje kolumn
  while (columns.B.length < 5) columns.B.push(getRandomNumber(1, 15));
  while (columns.I.length < 5) columns.I.push(getRandomNumber(16, 30));
  while (columns.N.length < 5) columns.N.push(getRandomNumber(31, 45));
  while (columns.G.length < 5) columns.G.push(getRandomNumber(46, 60));
  while (columns.O.length < 5) columns.O.push(getRandomNumber(61, 75));

  // Fyll i boardet med dessa nummer
  const allColumns = [columns.B, columns.I, columns.N, columns.G, columns.O];

  for (let i = 0; i < 5; i++) {
    const row = board.insertRow();
    for (let j = 0; j < 5; j++) {
      const cell = row.insertCell();
      const column = allColumns[j];
      const number = column[i];

      cell.textContent = number;
      cell.onclick = () => cell.classList.toggle("marked");
    }
  }
}

// Funktion för att få ett random nummer
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generera bingo-boardet när sidan laddas
generateBingoBoard();
