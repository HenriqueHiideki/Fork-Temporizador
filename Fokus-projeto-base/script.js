const html = document.querySelector('html');
const startButton = document.querySelector('.app__card-primary-button')
const focoButton = document.querySelector('.app__card-button--foco');
const curtoButton = document.querySelector('.app__card-button--curto');
const descansoLongo = document.querySelector('.app__card-button--longo');

const displayTempo = document.querySelector('#timer');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__tilte');

//Variáveis com o tempo de duracao de cada modo.
const duracaoFoco = 1500;
const duracaoDescanso = 300;
const duracaoDescandoLongo = 900;

//Funcoes que alteram a cor do contraste nos modos: Foco, Descando Curto e Descanso Longo.
focoButton.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco')
})

curtoButton.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto')
})

descansoLongo.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo')
})




