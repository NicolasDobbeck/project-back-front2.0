'use strict'

import { listarCursos } from "./cursosApi";

let {cursos} = await listarCursos();

console.log(cursos);