const floor = document.getElementById("floor");

const cores = [
  "var(--grama-1)",
  "var(--grama-2)",
  "var(--grama-3)",
  "var(--grama-4)",
  "var(--grama-5)",
  "var(--grama-6)",
];

const largura = Math.ceil(window.innerWidth / 10);
const altura = Math.ceil((window.innerHeight * 0.3) / 10);

for (let y = 0; y < altura; y++) {
  for (let x = 0; x < largura; x++) {
    const grama = document.createElement("div");

    grama.classList.add("floor_green");

    const cor = cores[Math.floor(Math.random() * cores.length)];

    grama.style.backgroundColor = cor;

    floor.appendChild(grama);
  }
}
