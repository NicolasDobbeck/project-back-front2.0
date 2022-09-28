'use strict'

import {mostrarAlunosCurso} from "./alunosApi.js"

let alunos = await mostrarAlunosCurso('ds');

console.log(alunos);
