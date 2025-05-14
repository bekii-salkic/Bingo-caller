const name = prompt("Skriv ditt namn eller kod:");
document.getElementById("playerName").innerText = `Spelare: ${name || "Okänd"}`;

const board = document.querySelector("#bingoBoard tbody");

function generateBingoBoard() {
  const columns = {
    B: [],
    I: [],
    N: [],
    G: [],
    O: []
  };

  while (columns.B.length < 5) columns.B.push(getRandom(1, 15));
  while (columns.I.length < 5) columns.I.push(getRandom(16, 30));
  while (columns.N.length < 5) columns.N.push(getRandom(31, 45));
  while (columns.G.length < 5) columns.G.push(getRandom(46, 60));
  while (columns.O.length < 5) columns.O.push(getRandom(61, 75));

  const all = [columns.B, columns.I, columns.N, columns.G, columns.O];

  for (let i = 0; i < 5; i++) {
    const row = board.insertRow();
    for (let j = 0; j < 5; j++) {
      const cell = row.insertCell();
      const number = all[j][i];
      cell.textContent = number;
      cell.onclick = () => cell.classList.toggle("marked");
    }
  }
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

generateBingoBoard();
