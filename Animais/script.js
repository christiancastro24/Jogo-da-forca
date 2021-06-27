let palavras = ['rato', 'anta', 'cavalo', 'leao', 'girafa', 'gato', 'tigre', 'foca', 'pinguim', 'sapo', 'cobra'];

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
        dicaJogo.textContent = 'Pertencentes à ordem dos roedores.'
        popUp.appendChild(dicaJogo)
    }

    if(palavra === palavras[1]) {
        forca.style.opacity = '0.3'
        popUp.style.display = 'block'
        popUp.style.opacity = '1'
        dicaJogo.textContent = 'É um mamífero perissodáctilo da família Tapiridae e gênero Tapirus.'
        popUp.appendChild(dicaJogo)
    }
    
    if(palavra === palavras[2]) {
        forca.style.opacity = '0.3'
        popUp.style.display = 'block'
        popUp.style.opacity = '1'
        dicaJogo.textContent = 'É um mamífero perissodáctilo pertencente à família taxonômica.'
        popUp.appendChild(dicaJogo)
    }

    if(palavra === palavras[3]) {
        forca.style.opacity = '0.3'
        popUp.style.display = 'block'
        popUp.style.opacity = '1'
        dicaJogo.textContent = 'É uma espécie de mamífero carnívoro'
        popUp.appendChild(dicaJogo)
    }

    if(palavra === palavras[4]) {
        forca.style.opacity = '0.3'
        popUp.style.display = 'block'
        popUp.style.opacity = '1'
        dicaJogo.textContent = 'O coração tem dois orifícios: um manda sangue para os pulmões e para os membros e outro bombeia para o cérebro um sangue mais fino.'
        popUp.appendChild(dicaJogo)
    }

    if(palavra === palavras[5]) {
        forca.style.opacity = '0.3'
        popUp.style.display = 'block'
        popUp.style.opacity = '1'
        dicaJogo.textContent = 'Ocupando o topo da cadeia alimentar, é predador natural de diversos animais, como roedores, pássaros, lagartixas e alguns insetos.'
        popUp.appendChild(dicaJogo)
    }

    if(palavra === palavras[6]) {
        forca.style.opacity = '0.3'
        popUp.style.display = 'block'
        popUp.style.opacity = '1'
        dicaJogo.textContent = 'É um mamífero carnívoro da família dos felídeos, que habita o continente asiático.'
        popUp.appendChild(dicaJogo)
    }

    if(palavra === palavras[7]) {
        forca.style.opacity = '0.3'
        popUp.style.display = 'block'
        popUp.style.opacity = '1'
        dicaJogo.textContent = 'Adaptada à vida marinha.'
        popUp.appendChild(dicaJogo)
    }

    if(palavra === palavras[8]) {
        forca.style.opacity = '0.3'
        popUp.style.display = 'block'
        popUp.style.opacity = '1'
        dicaJogo.textContent = 'É uma ave da família Spheniscidae, altamente modificadas para a uma vida aquática, filme...'
        popUp.appendChild(dicaJogo)
    }

    if(palavra === palavras[9]) {
        forca.style.opacity = '0.3'
        popUp.style.display = 'block'
        popUp.style.opacity = '1'
        dicaJogo.textContent = 'É uma designação genérica de anfíbios'
        popUp.appendChild(dicaJogo)
    }

    if(palavra === palavras[10]) {
        forca.style.opacity = '0.3'
        popUp.style.display = 'block'
        popUp.style.opacity = '1'
        dicaJogo.textContent = 'Substantivo feminino Zoologia Nome comum a todos os répteis da ordem dos ofídios...'
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