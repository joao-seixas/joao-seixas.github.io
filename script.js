let pecados = [['Aborto', 'Adulterio', 'Arrogante', 'Autoritario', 'Briguento', 'Covarde', 'Drogas', 'Feitiçaria', 'Imoral', 'Impuro', 'Injuriador', 'Abusador', 'Agressivo', 'Ciúme Doentio', 'Acomodado', 'Cruel', 'Destuidor', 'Coração Duro', 'Enganador', 'Facção', 'Vício do Cigarro', 'Hipócrita', 'Sexo com familiares', 'Injusto', 'Acusador', 'Avarento', 'Caçoador', 'Rebeldia', 'Primeira Comunhão', 'Crisma', 'Egoísmo', 'Ganância', 'Homossexualismo', 'Adivinhação', 'Sexo com Animais', 'Caluniador', 'Cobiçoso', 'Desonesto', 'Vício do Álcool', 'Glutonaria', 'Infidelidade', 'Sem Misericórdia', 'Ladrão', 'Jogos de Azar', 'Mania de Doença', 'Murmuração', 'Negligência', 'Ódio', 'Pacto Satânico', 'Preguiça', 'Racismo', 'Religiosidade', 'Sadismo', 'Simpatias e Supertições', 'Vingativo', 'Intolerante', 'Lascivo', 'Masturbação', 'Mentira', 'Música Satânica', 'Palavrões', 'Pornografia', 'Prostituição', 'Rancor', 'Sado-Masoquismo', 'Violento', 'Inveja', 'Irreverência', 'Vaidade', 'Lesbianismo', 'Mesquinho', 'Opressor', 'Ressentido', 'Sonegador', 'Iracundo', 'Intelectualismo', 'Imprudente', 'Maledicente', 'Espírito de Miséria', 'Ocultismo', 'Retenção de Dízimos', 'Retenção de Ofertas', 'Sadismo', 'RPG (jogo da morte)', 'Fornicação', 'Suicídio', 'Horóscopo', 'Suborno', 'Pirataria', 'Nova Era', 'Comunismo', 'Benzimentos', 'Amor ao Dinheiro', 'Cartomancia', 'Umbanda', 'Calote', 'Pichação', 'Orixás/Vodu', 'Estupro', 'Traição', 'Assassinato', 'Festas Idólatras', 'Retenção de Primícias', 'Pedofilia', 'Idolatria', 'Incredulidade', 'Pensamentos Imorais', 'Racionalismo'], []];

const pontos = document.getElementById('pontos');
const situacao = document.getElementById('situacao');
let biscoitos = cookies();

function montaLista() {
    const listaPecados = document.getElementById('lista-pecados');

    if (biscoitos.pecados) {
        pecados[1] = biscoitos.pecados.split(',').map(valor => valor === '1' ? true : false);
    }

    for (let indice = 0; indice < pecados[0].length; indice++) {
        let elementoAtual = document.createElement('li');

        elementoAtual.classList.add('item-lista');
        elementoAtual.setAttribute('data-indice', indice);
        if (pecados[1][indice]) {
            elementoAtual.innerHTML = `( <img class="imagem-lista" src="./img/sim.png"> ) ${pecados[0][indice]}`;
        } else {
            elementoAtual.innerHTML = `( <img class="imagem-lista" src="./img/nao.png"> ) ${pecados[0][indice]}`;
            pecados[1][indice] = false;
        }
        elementoAtual.addEventListener('click', clicouLista, false);
        listaPecados.appendChild(elementoAtual);
    }
    atualizaPlacar();
}

function clicouLista(evento) {
    let indice = parseInt(evento.target.getAttribute('data-indice') || evento.target.parentElement.getAttribute('data-indice'));
    let imagem = (evento.target.firstElementChild) || (evento.target);

    if (pecados[1][indice]) {
        imagem.src = './img/nao.png';
        pecados[1][indice] = false;
    } else {
        imagem.src = './img/sim.png';
        pecados[1][indice] = true;
    }

    atualizaPlacar();
    biscoitos.setCookie('pecados', pecados[1].map(valor => valor ? 1 : 0).join(), 12);
}

function atualizaPlacar() {
    let pontosAtuais = atualizaPontos();
    pontos.innerText = pontosAtuais;
    situacao.innerText = pegaMensagem(pontosAtuais);
}

function atualizaPontos() {
    return pecados[1].filter(Boolean).length;
}

function pegaMensagem(pontosAtuais) {
    switch (true) {
        case pontosAtuais < 1 : return 'Jesus Cristo';

        case pontosAtuais < 4 : return 'Santo';

        case pontosAtuais < 7 : return 'Apóstolo';

        case pontosAtuais < 10 : return 'Discípulo';

        case pontosAtuais < 15 : return 'Cristão';

        case pontosAtuais < 20 : return 'Ateu';

        case pontosAtuais < 25 : return 'Descrente';

        case pontosAtuais < 30 : return 'Impuro';

        case pontosAtuais < 35 : return 'Pecador';

        case pontosAtuais < 40 : return 'Blasfemo';

        case pontosAtuais < 45 : return 'Apóstata';

        case pontosAtuais < 50 : return 'Pagão';

        case pontosAtuais < 55 : return 'Infiel';

        case pontosAtuais < 60 : return 'Herege';

        case pontosAtuais < 65 : return 'Semente do Mal';

        case pontosAtuais < 70 : return 'Abominação';

        case pontosAtuais < 75 : return 'Servo do Mal';

        case pontosAtuais < 82 : return 'Adorador do Demo';

        case pontosAtuais < 89 : return 'Anticristo';

        case pontosAtuais < 96 : return 'Filho das Trevas';

        case pontosAtuais < 108 : return 'Cidadão de Bem';

        default : return 'Bolsomínion';
    }
}

function limpar() {
    biscoitos.setCookie('pecados', '', 12);
    document.location.reload();
}

function compartilhar() {
    let pontosAtuais = atualizaPontos();
    let categoria = pegaMensagem(pontosAtuais).toUpperCase();
    let mensagem = encodeURI(`Fiz o teste dos pecados e marquei ${pontosAtuais} pontos.\nEu sou um ${categoria}!\n\nFaça seu teste também em:\n`);
    const site = encodeURI(window.location.href);

    window.open(`https://twitter.com/intent/tweet?text=${mensagem}&url=${site}`);
}

function baixar() {
    htmlToImage.toJpeg(document.getElementById('principal'), { quality: 0.95, backgroundColor: 'white' })
    .then(function (dataUrl) {
      var link = document.createElement('a');
      link.download = 'pecados.jpeg';
      link.href = dataUrl;
      link.click();
    });
}

function cookies() {
    const completeCookie = decodeURI(document.cookie);
    const separateCookies = completeCookie.split(';');
    let cookies = {};
    cookies.errors = [];
  
    cookies.setCookie = (name, value, months) => {
      let expireDate = new Date();
      expireDate.setMonth(expireDate.getMonth() + months);
      document.cookie = name + '=' + encodeURI(value) + ';' + 'expires=' + expireDate.toUTCString();
    }
  
    if (completeCookie) {
      for (let current = 0; current < separateCookies.length; current++) {
        let currentCookie = separateCookies[current].split('=', 2);
        try {
          cookies[currentCookie[0].trim()] = currentCookie[1];
        }
        catch (error) {
          cookies.errors.push(error);
        }
      }
    }
    return cookies;
  }
