const html = document.querySelector("html");
const startButton = document.querySelector(".app__card-primary-button");
const focoButton = document.querySelector(".app__card-button--foco");
const curtoButton = document.querySelector(".app__card-button--curto");
const descansoLongo = document.querySelector(".app__card-button--longo");


const displayTempo = document.querySelector("#timer");
const banner = document.querySelector(".app__image");
const titulo = document.querySelector(".app__title");

//Variáveis com o tempo de duracao de cada modo.
const duracaoFoco = 1500;
const duracaoDescanso = 300;
const duracaoDescandoLongo = 900;

//Funcoes que alteram a cor do contraste nos modos: Foco, Descando Curto e Descanso Longo.
focoButton.addEventListener("click", () => {
  alterarContexto("foco");
});

curtoButton.addEventListener("click", () => {
  alterarContexto("descanso-curto");
});

descansoLongo.addEventListener("click", () => {
  alterarContexto("descanso-longo");
});



function alterarContexto(contexto) {
  html.setAttribute("data-contexto", contexto)
  banner.setAttribute("src", `./imagens/${contexto}.png`)
  switch (contexto) {
    case "foco":
        titulo.innerHTML= `Otimize sua produtividade,<br>
         <strong class="app__title-strong"> mergulhe no que importa </strong>`
        break;
    case "descanso-curto":
        titulo.innerHTML = `Que tal dar uma respirada?<br>
         <strong class="app__title-strong"> Faça uma pausa curta! </strong>`
        break;
    case "descanso-longo":
        titulo.innerHTML = `Hora de voltar à superfície.<br>
         <strong class="app__title-strong"> Faça uma pausa longa. </strong>`
        break;
    default:
        break;
  }
}
