const fox = document.getElementById("fox");
const floor = document.getElementById("floor");

const margemChao = 0.1;

const ajusteChao = window.innerWidth <= 768 ? -227 : -270;

let x = 100;
let y = 0;
let velocidadeY = 0;
let direcao = 1;
let velocidade = 1.5;
let acao = "andar";
let proximaAcao = Date.now() + 2000;
let ultimoTempo = performance.now();

function calcularPiso() {
  const topoChao = floor.getBoundingClientRect().top;
  const ajusteChao = window.innerWidth <= 768 ? -227 : -270;

  return window.innerHeight - topoChao - fox.offsetHeight + ajusteChao;
}
function escolherAcao(piso) {
  const acoes = ["andar", "andar", "parado", "pular"];
  acao = acoes[Math.floor(Math.random() * acoes.length)];

  direcao = Math.random() < 0.5 ? -1 : 1;
  velocidade = 1 + Math.random() * 2;
  proximaAcao = Date.now() + 1000 + Math.random() * 3000;

  const noChao = y <= piso && velocidadeY === 0;

  if (acao === "pular" && noChao) {
    velocidadeY = 9;
  }
}

function atualizar(agora) {
  const dt = Math.min(agora - ultimoTempo, 50);
  ultimoTempo = agora;
  const fator = dt / 16.67;

  const piso = calcularPiso();

  if (Date.now() >= proximaAcao) {
    escolherAcao(piso);
  }

  if (acao === "andar") {
    x += direcao * velocidade * fator;
  }

  const noAr = y > piso || velocidadeY > 0;

  if (noAr) {
    y += velocidadeY * fator;
    velocidadeY -= 0.45 * fator;
  }

  if (y <= piso && velocidadeY <= 0) {
    y = piso;
    velocidadeY = 0;
  }

  const limiteDireito = window.innerWidth - fox.offsetWidth;

  if (x <= 0) {
    x = 0;
    direcao = 1;
  } else if (x >= limiteDireito) {
    x = limiteDireito;
    direcao = -1;
  }

  fox.style.left = `${x}px`;
  fox.style.bottom = `${y}px`;

  fox.style.transform = direcao < 0 ? "scaleX(-1)" : "scaleX(1)";

  requestAnimationFrame(atualizar);
}

escolherAcao(calcularPiso());
requestAnimationFrame(atualizar);
