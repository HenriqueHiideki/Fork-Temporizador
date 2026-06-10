const html = document.querySelector("html");
const startButton = document.querySelector(".app__card-primary-button");
const focoButton = document.querySelector(".app__card-button--foco");
const curtoButton = document.querySelector(".app__card-button--curto");
const descansoLongo = document.querySelector(".app__card-button--longo");
const botes = document.querySelectorAll(".app__card-button");
const musicaFoco = document.querySelector("#alternar-musica");
const displayTempo = document.querySelector("#timer");
const banner = document.querySelector(".app__image");
const titulo = document.querySelector(".app__title");
let tempoDecorridoEmSegundos = 5;
let intervaloId = null;
const startPauseButton = document.querySelector("#start-pause");

//Variaveis Instancias de Audio;
const musica = new Audio("./sons/luna-rise-part-one.mp3");
const musicaPlay = new Audio("./sons/play.wav");
const musicaPause = new Audio("./sons/pause.mp3");
const musicaTempoFinalizado = new Audio("./sons/beep.mp3");

//Variáveis com o tempo de duracao de cada modo.
const duracaoFoco = 1500;
const duracaoDescanso = 300;
const duracaoDescandoLongo = 900;

//Funcoes que alteram a cor do contraste nos modos: Foco, Descando Curto e Descanso Longo.
focoButton.addEventListener("click", () => {
  alterarContexto("foco");
  focoButton.classList.add("active");
});

curtoButton.addEventListener("click", () => {
  alterarContexto("descanso-curto");
  curtoButton.classList.add("active");
});

descansoLongo.addEventListener("click", () => {
  alterarContexto("descanso-longo");
  descansoLongo.classList.add("active");
});

function alterarContexto(contexto) {
  html.setAttribute("data-contexto", contexto);
  banner.setAttribute("src", `./imagens/${contexto}.png`);
  switch (contexto) {
    case "foco":
      titulo.innerHTML = `Otimize sua produtividade,<br>
         <strong class="app__title-strong"> mergulhe no que importa </strong>`;
      break;
    case "descanso-curto":
      titulo.innerHTML = `Que tal dar uma respirada?<br>
         <strong class="app__title-strong"> Faça uma pausa curta! </strong>`;
      break;
    case "descanso-longo":
      titulo.innerHTML = `Hora de voltar à superfície.<br>
         <strong class="app__title-strong"> Faça uma pausa longa. </strong>`;
      break;
    default:
      break;
  }
}

//Configuracao da música de fundo.
musicaFoco.addEventListener("change", () => {
  if (musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
});
musica.loop = true; // Faz com que a musica fique em loop o tempo inteiro.

const contagemRegressiva = () => {
  if (tempoDecorridoEmSegundos <= 0) {
    musicaTempoFinalizado.play();
    zerar();

    setTimeout(() => {
      alert("Tempo finalizado!");
    }, 100);

    return;
  }
  tempoDecorridoEmSegundos -= 1;
  console.log("Temporizador: " + tempoDecorridoEmSegundos);
};

startPauseButton.addEventListener("click", iniciarOuPausar);

function iniciarOuPausar() {
  if (intervaloId) {
    musicaPause.play();
    zerar();
    return;
  }
  musicaPlay.play();
  intervaloId = setInterval(contagemRegressiva, 1000);
}

function finalizar() {
  clearInterval(intervaloId);
  intervaloId = null;
}

function zerar() {
  clearInterval(intervaloId);
  intervalId = null;
}
