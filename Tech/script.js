// Array de palavras que estão no jogo da forca
let palavras = ["programador", "algoritmo", "javascript", "html", "css", "frontend", "backend", "fullstack", "aplicativo", "jogo", "site"];

// String que vai armazenar a palavra sorteada
let palavra = palavras[Math.floor(Math.random() * palavras.length)];

// Chances e acertos: valores INICIAIS // 
let chances = 6;
let acertos = 0;

//ARMAZENAR A IMAGEM NA FORCA, PARA PODER PULANDO DE UMA EM UMA
let imagem = 0;

// variavel criada para utilizar nos for
let posicao;

let letrasDepois = document.getElementById('letras')


// INICIA NO ZERO E VAI ATÉ A PALAVRA SELECIONADA
for (posicao = 0; posicao < palavra.length; posicao++) {
    // span é palavra que vai armazear o quadradinho em baixo
    let span = document.createElement("span");

    // Coloca um id da letra na posição que foi achada
    span.setAttribute('id', posicao);

    // Chamou a tag que contem palavra e armazenou no span.
    let div = document.getElementById("palavra");
    div.appendChild(span);
}

// Variavel que armazena todas letras do alfabeto
let alfabeto = "abcdefghijklmnopqrstuvwxyz";

// Splitando letra por letra, para pegar CADA LETRA, para percorrer CADA LETRA Com um for
let letras = alfabeto.split("");


// For para percorrer cada LETRA
for (posicao = 0; posicao < letras.length; posicao++) {
    // Criada a variavel button para ser CADA letra do alfabeto
    let botao = document.createElement("button");
    // Criada variavel letra para receber CADA letra percorrida, uma por uma e armazenando em letra
    let letra = document.createTextNode(letras[posicao]);
    
    // Adiciona a letra dentro do botao
    botao.appendChild(letra);
    // Cria uma função que vai pegar a entrada da letra cada vez que for clicado
    botao.setAttribute('onclick', 'escolheLetra(\''+letras[posicao]+'\')');
    botao.setAttribute('id', letras[posicao]);

    // Criou uma variavel e chamou a tag que contem letras no HTML
    let div = document.getElementById("letras");
    // E coloca dentro da variavel que armazena as letras
    div.appendChild(botao);
}


// INICIO POP UP //
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
        dicaJogo.textContent = 'Pessoa que desenvolve lógica e códigos'
        popUp.appendChild(dicaJogo)
    }

    if(palavra === palavras[1]) {
        forca.style.opacity = '0.3'
        popUp.style.display = 'block'
        popUp.style.opacity = '1'
        dicaJogo.textContent = 'Lógica, códigos se formando...'
        popUp.appendChild(dicaJogo)
    }
    
    if(palavra === palavras[2]) {
        forca.style.opacity = '0.3'
        popUp.style.display = 'block'
        popUp.style.opacity = '1'
        dicaJogo.textContent = 'Linguagem de programação mais usada no mundo'
        popUp.appendChild(dicaJogo)
    }

    if(palavra === palavras[3]) {
        forca.style.opacity = '0.3'
        popUp.style.display = 'block'
        popUp.style.opacity = '1'
        dicaJogo.textContent = 'Linguagem de marcação de texto'
        popUp.appendChild(dicaJogo)
    }

    if(palavra === palavras[4]) {
        forca.style.opacity = '0.3'
        popUp.style.display = 'block'
        popUp.style.opacity = '1'
        dicaJogo.textContent = 'Usado nas estilizações'
        popUp.appendChild(dicaJogo)
    }

    if(palavra === palavras[5]) {
        forca.style.opacity = '0.3'
        popUp.style.display = 'block'
        popUp.style.opacity = '1'
        dicaJogo.textContent = 'Voltado para o lado do cliente, desenvolvimento...'
        popUp.appendChild(dicaJogo)
    }

    if(palavra === palavras[6]) {
        forca.style.opacity = '0.3'
        popUp.style.display = 'block'
        popUp.style.opacity = '1'
        dicaJogo.textContent = 'Voltado para o lado do servidor'
        popUp.appendChild(dicaJogo)
    }

    if(palavra === palavras[7]) {
        forca.style.opacity = '0.3'
        popUp.style.display = 'block'
        popUp.style.opacity = '1'
        dicaJogo.textContent = 'Desenvolvedor que atua em front-end e back-end'
        popUp.appendChild(dicaJogo)
    }

    if(palavra === palavras[8]) {
        forca.style.opacity = '0.3'
        popUp.style.display = 'block'
        popUp.style.opacity = '1'
        dicaJogo.textContent = 'Podendo ser elaborado com flutter e react-native'
        popUp.appendChild(dicaJogo)
    }

    if(palavra === palavras[9]) {
        forca.style.opacity = '0.3'
        popUp.style.display = 'block'
        popUp.style.opacity = '1'
        dicaJogo.textContent = 'Podendo ser elaborado várias linguagens, mas a mais famosa por trás é C++'
        popUp.appendChild(dicaJogo)
    }

    if(palavra === palavras[10]) {
        forca.style.opacity = '0.3'
        popUp.style.display = 'block'
        popUp.style.opacity = '1'
        dicaJogo.textContent = 'Principal função que um dev front end desenvolve'
        popUp.appendChild(dicaJogo)
    }

})

// FINAL POP UP 




function escolheLetra(letra) {

    // Verificação para saber se ja acertou todas palavras ou se ja errou tudo
    let acertou = false;

    // Laço for para percorrer cada letra
    for (posicao = 0; posicao < palavra.length; posicao++) {
        // Se a letra for encontrada
        if (letra === palavra[posicao]) {
            // Coloca ela na variavel span
            let span = document.getElementById(posicao);
            // Pe
            let l = document.createTextNode(letra);

            span.appendChild(l);

            /// Chama a variavel letra
            let botao = document.getElementById(letra);
            // Adiciona uma classe para mostrar se foi certa a letra
            botao.setAttribute('class', 'certa');
            // Remove o evento da letra, para não ser selecionada novamente
            botao.removeAttribute('onclick');

            // Incrementa os acertos
            acertos++;
            // Muda a variavel acertou para dar fim ao jogo
            acertou = true;
        }
    }


    // Se a letra não for encontrada
    if (!acertou) {
        // Adiciona 1 a mais na imagem para mudar para a proxima parte que vai ser decapitada
        imagem++;
        // Chama a imagem passando a imagem inicial que é a forca, se errar, adiciona e vai surgindo o resto das imagens do boneco sendo enforcado
        document.getElementById("forca").src = "../images/forca-"+imagem+".jpg";

        //Chama a variavel letra
        var botao = document.getElementById(letra);
        // Adiciona uma classe para mostrar se foi certa a letra
        botao.setAttribute('class', 'errada');
        // Remove o evento da letra, para não ser selecionada novamente
        botao.removeAttribute('onclick');

        // Decrementa a chance para cada vez ficar menos, inicia com 6, errou? 5, errou? 4 e assim sucessivamente
        chances--;
        
    }

    // Verificar se o jogo ACABOU

    // Se o jogador não acertou a palavra
    if (chances === 0) {
        // Criado um paragrafo 
        let mensagem = document.createElement("p");
        // Escrito "Você perdeu!"
        let t1 = document.createTextNode("Você perdeu!");
        // Adicionando esse paragrafo dentro da mensagem com appendChild
        mensagem.appendChild(t1);

        // Criado o botao para ver se a pessoa quer jogar novamente
        let botao = document.createElement("button");
        // Mensagem jogar novamente
        let t2 = document.createTextNode("jogar novamente");
        
        // Adiciona essa mensagem ao botão
        botao.appendChild(t2);
        // Adiciona uma classe a esse botao para estilizar
        botao.setAttribute('class', 'novo-bt');
        // Adiciona um evento esse botão para dar reload na página e iniciar novamente
        botao.setAttribute('onclick', 'window.location.reload()');

        // Criado variavel div para buscar uma tag com ID novo para armazenar tudo
        let div = document.getElementById("novo");
        // Adiciona a mensagem a div
        div.appendChild(mensagem);
        // Adiciona o botão a div
        div.appendChild(botao);
        // Some as letras quando acaba o jogo
        letrasDepois.style.display = 'none';
        verDica.style.display = 'none'
    }

    // SE O JOGADOR ACERTOU TUDO 
    if (acertos === palavra.length) {

        // Cria um paragrafo
        let mensagem = document.createElement("p");
        // Escrito "Você venceu!"
        let t1 = document.createTextNode("Você venceu!");
        // Adicionando esse paragrafo dentro da mensagem com appendChild
        mensagem.appendChild(t1);

        // Criado o botao para ver se a pessoa quer jogar novamente
        let botao = document.createElement("button");
         // Mensagem jogar novamente
        let t2 = document.createTextNode("jogar novamente");
        
         // Adiciona essa mensagem ao botão
        botao.appendChild(t2);
        // Adiciona uma classe a esse botao para estilizar
        botao.setAttribute('class', 'novo-bt');
        // Adiciona um evento esse botão para dar reload na página e iniciar novamente
        botao.setAttribute('onclick', 'window.location.reload()');

        // Criado variavel div para buscar uma tag com ID novo para armazenar tudo
        let div = document.getElementById("novo");
        // Adiciona a mensagem a div
        div.appendChild(mensagem);
        // Adiciona o botão a div
        div.appendChild(botao);
        // Some as letras quando acaba o jogo
        letrasDepois.style.display = 'none';
        verDica.style.display = 'none'
    }
}