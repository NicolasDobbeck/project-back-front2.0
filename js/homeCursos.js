/* 'use strict'

import { listarCursos } from "./cursosApi.js";

let {cursos} = await listarCursos();

console.log(cursos); */

'use strict'

// criar cards

import { listarCursos } from "./cursosApi.js";

let { cursos } = await listarCursos();

console.log(cursos);

const criarCards = (indice) => {
    const cardsContainer = document.querySelector('#cursos');
    const cards = document.createElement('div');
    cards.classList.add('cards');
    cards.id = indice.sigla.toLowerCase();

    const icone = document.createElement('img');
    icone.classList.add('curso-icone');
    icone.src = indice.icone;

    const sigla = document.createElement('span');
    sigla.classList.add('nome');
    sigla.textContent = indice.sigla;

    cards.appendChild(icone);
    cards.appendChild(sigla);
    cardsContainer.appendChild(cards)

    cards.addEventListener('click', (elemento) => {
        elemento.preventDefault();
        let idCurso = cards.id;
        // console.log(idCurso)

        localStorage.setItem('curso', idCurso);

        location.href = './module/assets/html/class.html';
    });
}

cursos.forEach(criarCards)

/* const criarCards = async(index) =>{
    const container = 
    document.querySelector('#cursos')
    const card = document.createElement('div')
    card.classList.add('card')
    card.id = index.sigla.toLowerCase();

    const imageIcon = document.createElement('img')
    imageIcon.classList.add('curso-image')
    imageIcon.src = index.imageIcon;

    const sigla = document.createElement('span')
    sigla.classList.add('nome')
    sigla.textContent = index.sigla

    card.appendChild(imageIcon)
    card.appendChild(sigla)
    container.appendChild(card)

    card.addEventListener('click', (item) =>{
        item.preventDefault()
        let idCurso = card.id

        localStorage.setItem('curso', idCurso)

        location.href = './module/assets/html/class.html'
    })
}

cursos.forEach(criarCards) */
