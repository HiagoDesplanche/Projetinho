const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Após você finalizar os estudos você tem que trabalhar",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "afirmacao"
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "afirmacao"
            }           
            
        ]
    },
    {
        enunciado: "Ao começar a trabalhar obrigatoriamente você descobre algo assustador",
        alternativas: [
            {
                texto:"O que é?",
                afirmacao:"afirmacao"
            },
            {
                texto: "Tanto faz",
                afirmacao:"afirmacao"
            }
        ]
    },
    {
        enunciado: "Você descobre acidentalmente que todos seus colegas de trabalho são alienigenas, por meio do óculos que você usa",
        alternativas: [
            {
                texto:"usar o óculos escondido",
                afirmacao:"afirmacao"
            },
            {
                texto:"Guardar o óculos no bolso e deixar quieto",
                afirmacao:"afirmacao"
            }
            
        ]
    },
    {
        enunciado: "Você deixa o óculos cair, e agora? o que você faz?",
        alternativas: [
            {
                texto:"Tentar pega-lo rapidamente",
                afirmacao:"afirmacao"
            },
            {
                texto:"Deixa caido no chão",
                afirmacao:"afirmacao"
            }
            
        ]
    },
    {
        enunciado: "Um colega seu que é um alien pega o óculos do chão e te faz uma ameaça",
        alternativas: [
            {
                texto: "Tentar se explicar",
                afirmacao:"afirmacao"
            },
            {
                texto: "Cuspir na cara dele",
                afirmacao:"afirmacao"
            }
            
            
        ]
    },
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Você morre em 2045...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();
