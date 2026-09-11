// Seleção dos elementos do DOM
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn");

// Dados das perguntas
const perguntas = [
  {
    enunciado:
      "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
    alternativas: [
      {
        texto: "Isso é assustador!",
        afirmacao: [
          "No início ficou com medo do que essa tecnologia pode fazer.",
          "Achou assustador pensar na velocidade na qual a tecnologia está avançando.",
        ],
      },
      {
        texto: "Isso é maravilhoso!",
        afirmacao: [
          "Quis saber como usar IA no seu dia a dia.",
          "Foi atrás de vídeos, artigos e mais informações sobre como utilizar essa tecnologia.",
        ],
      },
    ],
  },
];

// Variáveis de controle do quiz
let atual = 0;
let historiaFinal = "";

// Função para selecionar um elemento aleatório de um array
function aleatorio(lista) {
  const posicao = Math.floor(Math.random() * lista.length);
  return lista[posicao];
}

// Função para exibir a pergunta atual ou finalizar
function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }
  const perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.textContent = "";

  perguntaAtual.alternativas.forEach((opcao) => {
    const botaoAlternativa = document.createElement("button");
    botaoAlternativa.textContent = opcao.texto;
    botaoAlternativa.addEventListener("click", () => respostaSelecionada(opcao));
    caixaAlternativas.appendChild(botaoAlternativa);
  });
}

// Função para processar a resposta escolhida
function respostaSelecionada(opcaoSelecionada) {
  const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
  historiaFinal += afirmacoes + " ";
  atual++;
  mostraPergunta();
}

// Função para exibir o resultado final do quiz
function mostraResultado() {
  caixaPerguntas.textContent = "Em 2049...";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
  caixaResultado.classList.add("mostrar");
  botaoJogarNovamente.addEventListener("click", jogaNovamente);
}

// Função para reiniciar o quiz
function jogaNovamente() {
  atual = 0;
  historiaFinal = "";
  caixaResultado.classList.remove("mostrar");
  mostraPergunta();
}

// Executado assim que o documento HTML for carregado
document.addEventListener("DOMContentLoaded", function () {
  // Animação das barras do gráfico
  const barras = document.querySelectorAll(".barra");
  barras.forEach((barra) => {
    const alturaFinal = barra.style.height;
    barra.style.height = "0%";
    setTimeout(() => {
      barra.style.height = alturaFinal;
    }, 100);
  });

  // Inicializa o quiz
  mostraPergunta();
});
