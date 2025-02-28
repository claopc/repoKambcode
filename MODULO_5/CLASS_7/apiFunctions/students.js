//Se importan las librerías y funciones
import fs from 'fs/promises';

//Se construyen y se exportan las funciones
export const getStudents = async ( req, res) => {
       const students = await fs.readFile('./students.json', 'utf-8');            

       //Se valida si el archivo está vacío
       if (students === '') {      
        return res.status(404).json({error:'No existen estudiantes'});
       }

       res.send(JSON.parse(students));
}

export const getStudent = async ( req, res) => {
    const id = req.params.id;
  
    const students = await fs.readFile('./students.json', 'utf-8');
    const studentsList = JSON.parse(students);

    const findStudent = studentsList.find((student) => {
        return student.id === parseFloat(id)
    }) ;
      
    //Se valida si el estudiante existe
    if(!findStudent){
        return res.status(404).json({error: 'El estudiante ' + id + ' no existe'})
    }

    res.json(findStudent);      
}

export const postStudent = async (req, res) => {
       
    const students = await fs.readFile('./students.json', 'utf-8');
    const studentsList = JSON.parse(students);
    
    //Se valida la integridad de lo datos
    if((req.body.name === '' ||req.body.name === null || req.body.name === undefined) || 
       (req.body.age === '' || req.body.age === null || req.body.age === undefined || typeof req.body.age !== "number") || 
       (req.body.major === '' || req.body.major === null || req.body.major === undefined)){
        return res.status(409).json({error: 'Los parámetros no tienen valores válidos'})   
    }

    //Se incrementa 1 al id para crear el nuevo estudiante
    const id = studentsList.length + 1;
    //const id = 2;  // Constante para prueba de duplicado
        
    //Se valida si el id del estudiante ya existe    
    const isNotUnique = studentsList.some((student)=> {
        return student.id === id;
    })
    if(isNotUnique){
        return res.status(409).json({error: 'El estudiante ya existe'})
    }
    
    const student = {
         "id" : id,
         "name" : req.body.name,
         "age" : req.body.age,
         "major" :    req.body.major
        }    

    //Se escribe el nuevo estudiante en la lista de estudiantes
    studentsList.push(student)
    fs.writeFile('./students.json', JSON.stringify(studentsList));

    res.status(201).json(studentsList) 
}

export const putStudent = async (req, res) => {
    const id = req.params.id;    
    const students = await fs.readFile('./students.json', 'utf-8');
    const studentsList = JSON.parse(students);
    let idStudent = '';
    let nameStudent = '';
    let ageStudent = '';
    let majorStudent = '';
       
    //Se valida que el index no se modifique    
    if((req.body.id === '' ||req.body.id === null || req.body.id === undefined)){
       idStudent = parseFloat(id);    
    }else{
        return res.status(409).json({error: 'El Id del estudiante no se puede modificar'})
    }

     //Se consulta el index del estudiante que se va a actualizar
     const indexStudent = studentsList.findIndex(studentItem => studentItem.id === parseFloat(id));
                       
    //Se valida si el index existe
    if(indexStudent === -1){
        return res.status(404).json({error: 'El estudiante para actualizar no existe'})
    }
    
    //Se valida la integridad de lo datos y los datos a actualizar
    //name
    if('name' in req.body){            
        if(req.body.name === '' ||req.body.name === null || req.body.name === undefined){
            return res.status(409).json({error: 'El parámetro nombre no tienen valor válido'})   
        }else{
            nameStudent = req.body.name;
        }
    }else{
        nameStudent = studentsList[indexStudent].name
    }

    //age
    if('age' in req.body){            
        if(req.body.age === '' ||req.body.age === null || req.body.age === undefined || typeof req.body.age !== "number"){
            return res.status(409).json({error: 'El parámetro age no tienen valor válido'})   
        }else{
            ageStudent = req.body.age;
        }
    }else{
        ageStudent = studentsList[indexStudent].age
    }
 
    //major
    if('major' in req.body){            
        if(req.body.major === '' ||req.body.major === null || req.body.major === undefined){
            return res.status(409).json({error: 'El parámetro major no tienen valor válido'})   
        }else{
            majorStudent = req.body.major;
        }
    }else{
        majorStudent = studentsList[indexStudent].major
    }
         
    const student = {
        "id": idStudent,
        "name": nameStudent,
        "age": ageStudent,
        "major" : majorStudent
    }
    console.log(student)
    
    studentsList[indexStudent] = student; 
    fs.writeFile('./students.json', JSON.stringify(studentsList), 'utf-8');  

    res.send({message: 'Estudiante actualizado', estudiante: student})
}

export const deleteStudent = async (req, res) => {    
    const id = req.params.id;

    const students = await fs.readFile('./students.json', 'utf-8');
    const studentsList = JSON.parse(students);
    
    //Se consulta el index del estudiante que se va a eliminar
    const indexStudent = studentsList.findIndex((student) => {
        return student.id === parseFloat(id)
    })

    //Se valida si el index existe
    if(indexStudent === -1){
        return res.status(404).json({error:'El estudiante no existe'});
    }
    const deleteStudent = studentsList[indexStudent].name;

    studentsList.splice(indexStudent, 1);
    fs.writeFile('./students.json', JSON.stringify(studentsList), 'utf-8');
    
    res.json({mensaje: 'El estudiante ' + deleteStudent + ' , ha sido eliminado'})
}