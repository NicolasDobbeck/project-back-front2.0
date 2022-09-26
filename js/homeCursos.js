'use strict'

import { listarCursos } from "./cursosApi.js";

let {cursos} = await listarCursos();

console.log(cursos);