const raposa = document.querySelector("#fox");

if (raposa) {
  const velocidadeMinima = 0.5;
  const velocidadeMaxima = 1.2;

  let posicao = -80;
  let direcao = 1;
  let velocidade = 0.8;
  let ativa = true;
  let proximoRetorno = null;

  function iniciarRaposa() {
    if (window.innerWidth < 1024 || !matchMedia("(pointer: fine)").matches) {
      raposa.style.display = "none";
      return;
    }

    raposa.style.display = "block";
    ativa = true;
    direcao = Math.random() < 0.5 ? 1 : -1;
    velocidade =
      velocidadeMinima + Math.random() * (velocidadeMaxima - velocidadeMinima);

    posicao = direcao === 1 ? -raposa.offsetWidth : window.innerWidth;

    atualizarDirecao();
    animar();
  }

  function atualizarDirecao() {
    raposa.style.transform = direcao === 1 ? "scaleX(1)" : "scaleX(-1)";
  }

  function animar() {
    if (!ativa) return;

    posicao += velocidade * direcao;
    raposa.style.left = `${posicao}px`;

    const saiuDaTela =
      direcao === 1
        ? posicao > window.innerWidth
        : posicao + raposa.offsetWidth < 0;

    if (saiuDaTela) {
      ativa = false;
      raposa.style.display = "none";

      // Retorno raro: entre 2 e 5 minutos.
      const espera = 120000 + Math.random() * 180000;

      proximoRetorno = setTimeout(() => {
        iniciarRaposa();
      }, espera);

      return;
    }

    requestAnimationFrame(animar);
  }

  iniciarRaposa();

  window.addEventListener("resize", () => {
    if (window.innerWidth < 1024) {
      ativa = false;
      clearTimeout(proximoRetorno);
      raposa.style.display = "none";
    }
  });
}
