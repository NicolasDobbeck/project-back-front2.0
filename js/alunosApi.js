'use strict'

// mostrar alunos do mesmo curso
const mostrarAlunosCurso = async (disciplina) =>{
    const url = `http://localhost:5050/disciplina/${disciplina}`
    const response = await fetch(url);
    const data = await response.json()

    return data
}

export{
    mostrarAlunosCurso
}