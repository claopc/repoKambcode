//-------------------------------------------------------------------------------------//
//-------------------> APLICACIÓN DE GESTION DE ESTUDIANTES (CRUD) <-------------------//
// Fecha:  25 de Febrero de 2025                                                       //
// Autor:  Claudia Carrasquilla                                                        //
//-------------------------------------------------------------------------------------//

//Se importan las librerías
import express from 'express';
import { deleteStudent, getStudent, getStudents, postStudent, putStudent } from './apiFunctions/students.js';

//Se crea el servidor
const server = express();
server.use(express.json());

//------------------------------> AREA DE READ DEL CRUD <------------------------------//
//Se crea el endpoint students para obtener los datos de todos los estudiantes
server.get('/students', getStudents);

//Se crea el endpoint students/:id para obtener los datos de un estudiante en particular
server.get('/students/:id', getStudent)


//-----------------------------> AREA DE CREATE DEL CRUD <-----------------------------//
//Se crea el endpoint post para la creación de un nuevo estudiante.
server.post('/students', postStudent)


//-----------------------------> AREA DE UPDATE DEL CRUD <-----------------------------//
//Se crea el endpoint put para actualizar la información de un estudiante
server.put('/students/:id', putStudent)


//-----------------------------> AREA DE DELETE DEL CRUD <-----------------------------//
//Se crea el endpoint delete para eliminar estudiantes
server.delete('/students/:id', deleteStudent)


//Se configura el puerto y se imprime un mensaje por consola
server.listen(3002, () => console.log('Server is running on port 3002'));

