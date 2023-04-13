// Ativar links de menu
const links = document.querySelectorAll(".header-menu a");

function ativarlink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarlink);

// Ativar itens do orçamento
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

// Perguntas frequentes
const perguntas = document.querySelectorAll(".perguntas button");
perguntas.forEach(eventosPerguntas);

function ativarPergunta(event) {
  const pergunta = event.target;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  const ativa = resposta.classList.contains("ativo");
  resposta.classList.toggle("ativo");
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

// Galeria de bicicleta
const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

galeria.forEach(eventosGaleria);

function trocarImagem(e) {
  const img = e.target;
  const media = matchMedia("(min-width: 1000px)").matches;
  if (media) {
    galeriaContainer.prepend(img);
  }
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

// Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
