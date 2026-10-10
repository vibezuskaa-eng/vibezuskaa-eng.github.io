const cloud = document.getElementById("cloud");

const quantidade = 12;

for (let i = 0; i < quantidade; i++) {
  const nuvem = document.createElement("div");
  nuvem.classList.add("cloud_small");

  const largura = 40 + Math.random() * 100;
  const altura = 20 + Math.random() * 30;

  nuvem.style.width = `${largura}px`;
  nuvem.style.height = `${altura}px`;

  nuvem.style.top = `${Math.random() * 30}vh`;
  nuvem.style.left = `${Math.random() * 120}vw`;

  nuvem.style.animationDuration = `${20 + Math.random() * 40}s`;
  nuvem.style.animationDelay = `${-Math.random() * 60}s`;

  cloud.appendChild(nuvem);
}
