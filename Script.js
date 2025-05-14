const name = prompt("Skriv ditt namn eller kod:");
document.getElementById("playerName").innerText = `Spelare: ${name}`;

const board = document.getElementById("bingoBoard");
const numbers = [];

while (numbers.length < 25) {
  const num = Math.floor(Math.random() * 75) + 1;
  if (!numbers.includes(num)) numbers.push(num);
}

for (let i = 0; i < 5; i++) {
  const row = board.insertRow();
  for (let j = 0; j < 5; j++) {
    const cell = row.insertCell();
    const n = numbers[i * 5 + j];
    cell.textContent = n;
    cell.onclick = () => cell.classList.toggle("marked");
  }
}

setInterval(() => {
  fetch("caller.html")
    .then(res => res.text())
    .then(html => {
      const match = html.match(/<p id="calledNumbers">([^<]*)<\/p>/);
      if (match) {
        document.getElementById("calledNumbers").innerText = match[1];
      }
    });
}, 5000);
