const floor = document.getElementById("floor");

const gramas = [
  "var(--grama-1)",
  "var(--grama-2)",
  "var(--grama-3)",
  "var(--grama-4)",
  "var(--grama-5)",
];

const terras = [
  "var(--terra-1)",
  "var(--terra-2)",
  "var(--terra-3)",
  "var(--terra-4)",
];

const tamanho = 40;
const largura = Math.ceil(window.innerWidth / tamanho);
const altura = Math.ceil((window.innerHeight * 0.3) / tamanho);

for (let y = 0; y < altura; y++) {
  for (let x = 0; x < largura; x++) {
    const bloco = document.createElement("div");

    if (y === 0) {
      // Superfície de grama
      bloco.className = "floor_green";
      bloco.style.backgroundColor =
        gramas[Math.floor(Math.random() * gramas.length)];
    } else {
      // Terra abaixo da superfície
      bloco.className = "floor_dirt";
      bloco.style.backgroundColor =
        terras[Math.floor(Math.random() * terras.length)];
    }

    floor.appendChild(bloco);
  }
}
