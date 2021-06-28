let palavras = ['banana', 'melao', 'abacaxi', 'pera', 'limao', 'laranja', 'uva', 'morango', 'maracuja', 'melancia', 'pitaia'];

let palavra = palavras[Math.floor(Math.random() * palavras.length)];

let chances = 6;

let acertos = 0;

let imagem = 0;


let posicao;

let letrasDepois = document.getElementById('letras')


// INICIA NO ZERO E VAI ATÉ A PALAVRA SELECIONADA
for (posicao = 0; posicao < palavra.length; posicao++) {

    let span = document.createElement("span");

    span.setAttribute('id', posicao);

    let div = document.getElementById("palavra");

    div.appendChild(span);
}


let alfabeto = "abcdefghijklmnopqrstuvwxyz";


let letras = alfabeto.split("");


// For para percorrer cada LETRA
for (posicao = 0; posicao < letras.length; posicao++) {

    let botao = document.createElement("button");

    let letra = document.createTextNode(letras[posicao]);
    

    botao.appendChild(letra);

    botao.setAttribute('onclick', 'escolheLetra(\''+letras[posicao]+'\')');
    botao.setAttribute('id', letras[posicao]);


    let div = document.getElementById("letras");

    div.appendChild(botao);
}


let verDica = document.getElementById('verDica');
let popUp = document.getElementById('pop-up');
let fechar  = document.getElementById('fechar');
let dicaJogo = document.getElementById('dica-jogo')
let forca = document.getElementById('teste-forca')

fechar.addEventListener('click', () => {
    popUp.style.display = 'none'
    letrasDepois.style.display = 'flex';
    forca.style.opacity = '1.5'
})

verDica.addEventListener('click', () => {
    if(palavra === palavras[0]) {
        forca.style.opacity = '0.3'
        popUp.style.display = 'block'
        popUp.style.opacity = '1'
        dicaJogo.textContent = 'Previne as doenças cardiovasculares...'
        popUp.appendChild(dicaJogo)
    }

    if(palavra === palavras[1]) {
        forca.style.opacity = '0.3'
        popUp.style.display = 'block'
        popUp.style.opacity = '1'
        dicaJogo.textContent = 'Uma opção de fruta doce e refrescante para o verão'
        popUp.appendChild(dicaJogo)
    }
    
    if(palavra === palavras[2]) {
        forca.style.opacity = '0.3'
        popUp.style.display = 'block'
        popUp.style.opacity = '1'
        dicaJogo.textContent = 'Revine o envelhecimento precoce.'
        popUp.appendChild(dicaJogo)
    }

    if(palavra === palavras[3]) {
        forca.style.opacity = '0.3'
        popUp.style.display = 'block'
        popUp.style.opacity = '1'
        dicaJogo.textContent = ' É uma fruta que fornece nutrientes importantes para a saúde como vitamina A, E, C'
        popUp.appendChild(dicaJogo)
    }

    if(palavra === palavras[4]) {
        forca.style.opacity = '0.3'
        popUp.style.display = 'block'
        popUp.style.opacity = '1'
        dicaJogo.textContent = '...é o fruto de uma pequena árvore de folha perene originária da região sudeste da Ásia, da família das rutáceas.'
        popUp.appendChild(dicaJogo)
    }

    if(palavra === palavras[5]) {
        forca.style.opacity = '0.3'
        popUp.style.display = 'block'
        popUp.style.opacity = '1'
        dicaJogo.textContent = 'Fruta rica em vitamina C'
        popUp.appendChild(dicaJogo)
    }

    if(palavra === palavras[6]) {
        forca.style.opacity = '0.3'
        popUp.style.display = 'block'
        popUp.style.opacity = '1'
        dicaJogo.textContent = 'Sua fruta gera um suco maravilhoso e outras bebidas...'
        popUp.appendChild(dicaJogo)
    }

    if(palavra === palavras[7]) {
        forca.style.opacity = '0.3'
        popUp.style.display = 'block'
        popUp.style.opacity = '1'
        dicaJogo.textContent = 'Elimina toxinas do corpo, assim, pode ser considerada uma fruta depurativa.'
        popUp.appendChild(dicaJogo)
    }

    if(palavra === palavras[8]) {
        forca.style.opacity = '0.3'
        popUp.style.display = 'block'
        popUp.style.opacity = '1'
        dicaJogo.textContent = 'Ajuda a combater o estresse e a ansiedade.'
        popUp.appendChild(dicaJogo)
    }

    if(palavra === palavras[9]) {
        forca.style.opacity = '0.3'
        popUp.style.display = 'block'
        popUp.style.opacity = '1'
        dicaJogo.textContent = 'Hidrata o corpo e Diminui riscos de doenças cardiovasculares.'
        popUp.appendChild(dicaJogo)
    }

    if(palavra === palavras[10]) {
        forca.style.opacity = '0.3'
        popUp.style.display = 'block'
        popUp.style.opacity = '1'
        dicaJogo.textContent = 'Prevenção e controle de doenças crônicas.'
        popUp.appendChild(dicaJogo)
    }
})

const escolheLetra = letra => {

    let acertou = false;

    for (posicao = 0; posicao < palavra.length; posicao++) {

        if (letra === palavra[posicao]) {

            let span = document.getElementById(posicao);

            let l = document.createTextNode(letra);

            span.appendChild(l);

            let botao = document.getElementById(letra);

            botao.setAttribute('class', 'certa');

            botao.removeAttribute('onclick');

            acertos++;
            acertou = true;
        }
    }


    if (!acertou) {
        imagem++;

        document.getElementById("forca").src = "../images/forca-"+imagem+".png";

        let botao = document.getElementById(letra);

        botao.setAttribute('class', 'errada');

        botao.removeAttribute('onclick');

        chances--;
        
    }

    if (chances === 0) {

        let mensagem = document.createElement("p");

        let t1 = document.createTextNode("Você perdeu!");

        mensagem.appendChild(t1);

        let botao = document.createElement("button");

        botao.classList.add('btn-teste')

        let t2 = document.createTextNode("jogar novamente");
        
        botao.appendChild(t2);

        botao.setAttribute('class', 'novo-bt');

        botao.setAttribute('onclick', 'window.location.reload()');

        let div = document.getElementById("novo");

        div.appendChild(mensagem);

        div.appendChild(botao);

        letrasDepois.style.display = 'none';
        verDica.style.display = 'none'
    }

    // SE O JOGADOR ACERTOU TUDO 
    if (acertos === palavra.length) {

        let mensagem = document.createElement("p");

        let t1 = document.createTextNode("Você venceu!");

        mensagem.appendChild(t1);

        let botao = document.createElement("button");

        let t2 = document.createTextNode("jogar novamente");
        
        botao.appendChild(t2);

        botao.setAttribute('class', 'novo-bt');

        botao.setAttribute('onclick', 'window.location.reload()');

        let div = document.getElementById("novo");

        div.appendChild(mensagem);

        div.appendChild(botao);

        letrasDepois.style.display = 'none';
        verDica.style.display = 'none'
    }
}