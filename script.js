const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como a tecnologia deve ser usada na saúde pública?",
        alternativas: [
            {
                texto: "Focar em consultas online e aplicativos para que qualquer pessoa consiga atendimento médico direto do celular, sem sair de casa.",
                afirmacao: "Você gosta de praticidade, inovação e facilidade no dia a dia. Valoriza o uso da tecnologia para encurtar distâncias e economizar tempo."
            },
            {
                texto:  "Focar na organização dos dados, prontuários integrados e controle de estoque de remédios para o sistema interno funcionar sem erros.",
                afirmacao: "Você valoriza a ordem, a eficiência dos bastidores e a precisão. Acredita que as coisas só funcionam bem quando a gestão interna está redonda."
            }    
           
        ]
    },
    {
       
            enunciado: "Qual é a melhor forma de cuidar da saúde mental da população?",
            alternativas: [
                {
                    texto: "Criar grupos de conversa, atividades físicas e palestras de apoio nas escolas, bairros e ambientes de trabalho.",
                    afirmacao: "Você acredita na força do convívio, do diálogo e da empatia. Valoriza o apoio coletivo e o bem-estar social no dia a dia."
                },
                {
                    texto:  "Aumentar o número de psicólogos e psiquiatras nos postos para atender cada pessoa de forma individual e personalizada."
",
                    afirmacao: "Você valoriza a privacidade, a atenção técnica e o acompanhamento especializado. Acredita no cuidado pontual de cada caso."
                }    
               
            ]
        },
        {
            enunciado: "Qual é a medida mais urgente para melhorar o sistema de saúde pública no país?",

            alternativas: [
                {
                    texto: "Redirecionar a maior parte dos recursos para a atenção primária e prevenção (postos de saúde, campanhas de vacinação e acompanhamento familiar), evitando que as pessoas adoeçam gravemente.",
                    afirmacao: "Você prioriza a educação e o cuidado contínuo para evitar doenças e não sobrecarregar o sistema de saúde a longo prazo."
                },
                {
                    texto:    "Concentrar os investimentos na expansão da rede hospitalar e de urgência (UTIs, leitos e exames de alta complexidade), garantindo atendimento rápido e eficiente para quem já está em situação crítica.",
               
                    afirmacao: "Você prioriza o atendimento hospitalar imediato e a infraestrutura avançada para salvar vidas em situações críticas."
                }    
               
            ]
        },
]
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
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

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++
    mostraPergunta();
}
function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}



mostraPergunta();