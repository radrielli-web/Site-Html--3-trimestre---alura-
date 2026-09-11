const caixaPrincipal = document.querySelector(“.caixa-principal”);
const caixaPerguntas = document.querySelector(“.caixa-perguntas”);
const caixaAlternativas = document.querySelector(“.caixa-alternativas”);
const caixaResultado = document.querySelector(“.caixa-resultado”);
const textoResultado = document.querySelector(“.texto-resultado”);
const perguntas = [
  {
    enunciado:
      "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
    alternativas: [
      {
        texto: "Isso é assustador!",
        afirmacao: [
          "No início ficou com medo do que essa tecnologia pode fazer. ",
          "Achou assustador pensar na velocidade na qual a tecnologia está avançando.",
        ],
      },
      {
        texto: "Isso é maravilhoso!",
        afirmacao: [
          "Quis saber como usar IA no seu dia a dia.",
          "Foi atrás de vídeos, artigos e mais informaçõe sobre como utilizar essa tecnologia.",
        ],
      },
    ],
  },
];
function aleatorio(lista) {

}
function aleatorio(lista) {
    const posicao = Math.random()* lista.length;
}
function aleatorio(lista) {
const posicao = Math.floor(Math.random()* lista.length);
}
function aleatorio(lista) {
const posicao = Math.floor(Math.random()* lista.length);
return lista[posicao];
}
function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
historiaFinal += afirmacoes + “ “;
atual++;
mostraPergunta();
}
function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
historiaFinal += afirmacoes + “ “;
atual++;
mostraPergunta();
}
export const perguntas = [
{
export function aleatorio (lista){
    const posicao = Math.floot(Math.random()* lista.length);
    return lista[posicao];
import {aleatorio} from ‘./aleatorio.js’;
import {perguntas} from ‘./perguntas.js;
<script src="script.js"></script>
<script src=”js/script.js”></script>
<script type=”module” src=”js/script.js”></script>
<script type=”module” src=”js/aleatorio.js”></script>
<script type=”module” src=”js/perguntas.js”></script>
<script type=”module” src=”js/script.js”></script>
<div class= “caixa-resultado”>
    <p class=”texto-resultado”></p>
    <button class=”novamente-btn”></button>
</div>
const botaoJogarNovamente = document.querySelector(“.novamente-btn”);
function jogaNovamente(){
    atual = 0;
    historiaFinal = "";
    mostraPergunta();
function mostraResultado() {
caixaPerguntas.textContent = "Em 2049...";
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "";
botaoJogarNovamente.addEventListener("click", jogaNovamente());

}
<div class= “caixa-resultado”>
    <p class=”texto-resultado”></p>
    <button class=”novamente-btn”>Jogar novamente</button>
</div>
function mostraResultado() {
caixaPerguntas.textContent = "Em 2049...";
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "";
caixaResultado.classList.add("mostrar"); botaoJogarNovamente.addEventListener("click", jogaNovamente());
}
function jogaNovamente() {
atual = 0;
historiaFinal = "";
caixaResultado.classList.remove("mostrar");
mostraPergunta();
}
function mostraResultado() {
caixaPerguntas.textContent = "Em 2049...";
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "";
caixaResultado.classList.add("mostrar"); botaoJogarNovamente.addEventListener("click", jogaNovamente);
}
.caixa-resultado{
    display: none;
}
.caixa-resultado.mostrar{
    display: block;
}
@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
body {
background-color: var(--cor-fundo);
color: var(--cor-texto);
font-family: 'Inter', sans-serif;
display: flex;
justify-content: center;
align-items: center;
min-height: 100vh;
}
h1, .caixa-perguntas, .caixa-resultado{
    font-family: 'Chakra Petch', sans-serif;
}
.caixa-alternativas{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
