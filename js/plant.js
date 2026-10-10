export function criarArvore(container = document.body) {
  const arvore = document.createElement("div");
  arvore.classList.add("arvore");

  arvore.innerHTML = `
    <div class="copa">
      <div class="folha folha1"></div>
      <div class="folha folha2"></div>
      <div class="folha folha3"></div>
      <div class="folha folha4"></div>
      <div class="folha folha5"></div>
    </div>
    <div class="tronco"></div>
  `;

  container.appendChild(arvore);
  return arvore;
}
