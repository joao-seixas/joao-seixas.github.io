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
    atualizaPontos();
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

    atualizaPontos();
    biscoitos.setCookie('pecados', pecados[1].map(valor => valor ? 1 : 0).join(), 12);
}

function atualizaPontos() {
    let pontosAtuais = pecados[1].filter(Boolean).length;

    pontos.innerText = pontosAtuais;

    switch (true) {
        case pontosAtuais < 1 : situacao.innerText = 'Jesus Cristo';
        break;

        case pontosAtuais < 2 : situacao.innerText = 'Santo';
        break;

        case pontosAtuais < 4 : situacao.innerText = 'Apóstolo';
        break;

        case pontosAtuais < 6 : situacao.innerText = 'Discípulo';
        break;

        case pontosAtuais < 8 : situacao.innerText = 'Cristão';
        break;

        case pontosAtuais < 13 : situacao.innerText = 'Cidadão de Bem';
        break;

        case pontosAtuais < 16 : situacao.innerText = 'Descrente';
        break;

        case pontosAtuais < 19 : situacao.innerText = 'Impuro';
        break;

        case pontosAtuais < 24 : situacao.innerText = 'Pecador';
        break;

        case pontosAtuais < 29 : situacao.innerText = 'Blasfemo';
        break;

        case pontosAtuais < 34 : situacao.innerText = 'Semente do Mal';
        break;

        case pontosAtuais < 39 : situacao.innerText = 'Apóstata';
        break;

        case pontosAtuais < 44 : situacao.innerText = 'Pagão';
        break;

        case pontosAtuais < 49 : situacao.innerText = 'Infiel';
        break;

        case pontosAtuais < 54 : situacao.innerText = 'Herege';
        break;

        case pontosAtuais < 64 : situacao.innerText = 'Abominação';
        break;

        case pontosAtuais < 74 : situacao.innerText = 'Servo do Mal';
        break;

        case pontosAtuais < 84 : situacao.innerText = 'Anticristo';
        break;

        case pontosAtuais < 94 : situacao.innerText = 'Adorador do Demo';
        break;

        case pontosAtuais < 104 : situacao.innerText = 'Filho das Trevas';
        break;
    }
}

function limpar() {
    biscoitos.setCookie('pecados', '', 12);
    document.location.reload();
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
