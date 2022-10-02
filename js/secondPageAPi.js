'use strict'

import {mostrarAlunosCurso} from "./alunosApi.js"
import {listarCursosTitle} from "./alunosApi.js"

const curso = localStorage.getItem('curso');
let alunos = await mostrarAlunosCurso(curso);
let cursos = await listarCursosTitle()


console.log(cursos);
console.log(alunos);

let titleContainer = '';

cursos.forEach(item => {
    if (item.sigla.toUpperCase() == curso) {
        titleContainer = item.nome.split(' - ')[1].replace('Técnico em', '');

    }
});

const insertTitle = () =>{
    const title = document.querySelector('title')
    title.textContent = titleContainer
}

insertTitle();



const cardAluno = (data) => {
    const cardsContainer = document.querySelector('#card');
    const cards = document.createElement('div');
    cards.classList.add('cards');
    
    if (item.status.toLowerCase() == 'cursando') {
        cards.classList.add('card-azul')
    }else if (item.status.toLowerCase() == 'finalizado') {
        cards.classList.add('card-amarelo')
    }

    cards.innerHTML = `
    <img src"${item.foto}"class"foto-aluno">
    <span class="aluno-nome">${item.nome.toUpperCase()}</span> `

}

cardsContainer.appendChild(cards)






















