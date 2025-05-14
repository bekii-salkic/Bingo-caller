const name = prompt("Skriv ditt namn eller kod:");
document.getElementById("playerName").innerText = `Spelare: ${name || "Okänd"}`;

const board = document.querySelector("#bingoBoard tbody");

function generateBingoBoard() {
  const columns = {
    B: getUniqueRandomNumbers(1, 15, 5),
    I: getUniqueRandomNumbers(16, 30, 5),
    N: getUniqueRandomNumbers(31, 45, 5),
    G: getUniqueRandomNumbers(46, 60, 5),
    O: getUniqueRandomNumbers(61, 75, 5)
  };

  const all = [columns.B, columns.I, columns.N, columns.G, columns.O];

  for (let i = 0; i < 5; i++) {
    const row = board.insertRow();
    for (let j = 0; j < 5; j++) {
      const cell = row.insertCell();

      // Mittenrutan (gratis)
      if (i === 2 && j === 2) {
        cell.textContent = "FRI";
        cell.classList.add("marked");
        continue;
      }

      const number = all[j][i];
      cell.textContent = number;
      cell.onclick = () => cell.classList.toggle("marked");
    }
  }
}

function getUniqueRandomNumbers(min, max, count) {
  const range = Array.from({ length: max - min + 1 }, (_, i) => i + min);
  const selected = [];

  while (selected.length < count) {
    const i = Math.floor(Math.random() * range.length);
    selected.push(range.splice(i, 1)[0]);
  }

  return selected;
}

generateBingoBoard();
