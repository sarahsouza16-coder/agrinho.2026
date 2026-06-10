
// Quiz

function corrigirQuiz(){

    let acertos = 0;

    for(let i = 1; i <= 5; i++){

        let resposta = document.querySelector(
            `input[name="q${i}"]:checked`
        );

        if(resposta && resposta.value === "certo"){
            acertos++;
        }
    }

    let mensagem = "";

    if(acertos <= 2){
        mensagem = "Continue estudando!";
    }
    else if(acertos <= 4){
        mensagem = "Muito bem!";
    }
    else{
        mensagem = "Parabéns! Você é um defensor da natureza!";
    }

    document.getElementById("resultadoQuiz").innerHTML =
        `Você acertou ${acertos} de 5 perguntas.<br>${mensagem}`;
}


// Gerador de dicas

const dicas = [

    "Plante árvores nativas.",
    "Evite desperdício de papel.",
    "Apoie produtos sustentáveis.",
    "Denuncie queimadas ilegais.",
    "Recicle materiais sempre que possível.",
    "Preserve áreas verdes da sua comunidade."

];

function gerarDica(){

    let indice = Math.floor(
        Math.random() * dicas.length
    );

    document.getElementById("dica").textContent =
        dicas[indice];
}


// Curiosidades

function mostrarCuriosidade(card){

    let curiosidade =
        card.querySelector(".texto-escondido").textContent;

    card.innerHTML = curiosidade;
}


// Acessibilidade

let tamanhoFonte = 16;

function aumentarFonte(){

    tamanhoFonte += 2;

    document.documentElement.style.setProperty(
        "--tamanho-fonte",
        tamanhoFonte + "px"
    );
}

function diminuirFonte(){

    if(tamanhoFonte > 12){

        tamanhoFonte -= 2;

        document.documentElement.style.setProperty(
            "--tamanho-fonte",
            tamanhoFonte + "px"
        );
    }
}

function alternarContraste(){

    document.body.classList.toggle("alto-contraste");
}
