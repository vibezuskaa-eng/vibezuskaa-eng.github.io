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

  nuvem.style.left = "0";

  nuvem.style.animationDuration = `${20 + Math.random() * 40}s`;
  nuvem.style.animationDelay = `${-Math.random() * 60}s`;

  cloud.appendChild(nuvem);
}

const particulas = 40;

function criarParticulas() {
  document.querySelectorAll(".particula").forEach((p) => p.remove());

  const limiteChao = window.innerHeight * 0.65;

  for (let i = 0; i < particulas; i++) {
    const bolinha = document.createElement("div");
    bolinha.classList.add("particula");

    bolinha.style.left = Math.random() * 100 + "vw";
    bolinha.style.top = Math.random() * limiteChao + "px";

    bolinha.style.animationDuration = 5 + Math.random() * 10 + "s";
    bolinha.style.animationDelay = -Math.random() * 10 + "s";

    document.body.appendChild(bolinha);
  }
}

criarParticulas();
window.addEventListener("resize", criarParticulas);

function atualizarTema() {
  const hora = new Date().getHours();
  document.body.classList.toggle("noite", hora >= 18 || hora < 6);
}

atualizarTema();
setInterval(atualizarTema, 60_000);
