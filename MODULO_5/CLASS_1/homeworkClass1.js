//-----------------------------------------------------------------------------------------------//
//------------------------------------------> PUNTO 1 <------------------------------------------//
//-----------------------------------------------------------------------------------------------//

let libros = [
    { titulo: 'El Hobbit', autor: 'J.R.R. Tolkien', paginas: 300 },
    { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', paginas: 400 },
    { titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling', paginas: 350 }
];

//Imprimir en la consola el nombre y el autor del segundo libro.
console.log('*-----------------------------------------------------------------*');
console.log('*---------------------------- PUNTO 1 ----------------------------*');
console.log('*-----------------------------------------------------------------*');
console.log('Imprimir en la consola el nombre y el autor del segundo libro.')
console.log('Nombre: ' + libros[1].titulo + ' Autor: ' + libros[1].autor)

//Actualizar  el número de páginas del primer libro a 350.

libros[0].paginas = 350;

console.log('Imprime en la consola la información completa del primer libro después de la actualización')
console.log(libros[0]);

//Utilizar la función map para generar un nuevo array de libros que solo tenga las propiedades titulo y autor
const librosNew = libros.map(libro => {
    const contenedor = {};

    contenedor.titulo = libro.titulo;
    contenedor.autor = libro.autor;
    return contenedor;
})


/* const librosNew = libros.map((libro) => {return libro.titulo + ' ' + libro.autor});*/

console.log('Utiliza la función map para generar un nuevo array de libros que solo tenga las propiedades titulo y autor')
console.log(librosNew) 

//-----------------------------------------------------------------------------------------------//
//------------------------------------------> PUNTO 2 <------------------------------------------//
//-----------------------------------------------------------------------------------------------//
const estudiantes = [
    { nombre: "Pedro", edad: 29, promedio: 7.9 },
    { nombre: "Ana", edad: 33, promedio: 8.9 },
    { nombre: "Pablo", edad: 32, promedio: 9.5 },
    { nombre: "Juan", edad: 25, promedio: 6.0 },
    { nombre: "Maria", edad: 28, promedio: 7.3 },
    { nombre: "Andres", edad: 45, promedio: 8.7 },
];

let sumaEdadEstudiantes = 0;
let promedioEdadEstudiantes = 0;

for(let i = 0; i < estudiantes.length; i++){
    sumaEdadEstudiantes +=  estudiantes[i].edad;
}

promedioEdadEstudiantes = sumaEdadEstudiantes / estudiantes.length;

console.log('*-----------------------------------------------------------------*')
console.log('*---------------------------- PUNTO 2 ----------------------------*')
console.log('*-----------------------------------------------------------------*')
console.log('Imprimir en la consola tanto la suma como el promedio de edad de los estudiantes.')
console.log('La suma de las edades de los estudiantes es: ' + sumaEdadEstudiantes);
console.log('El promedio de la edad de los estudiantes es: ' + promedioEdadEstudiantes);

//-----------------------------------------------------------------------------------------------//
//------------------------------------------> PUNTO 3 <------------------------------------------//
//-----------------------------------------------------------------------------------------------//

let productos = [
    { nombre: 'Camisa', categoria: 'Ropa', precio: 20 },
    { nombre: 'Computadora', categoria: 'Electrónica', precio: 800 },
    { nombre: 'Zapatos', categoria: 'Ropa', precio: 50 },
    { nombre: 'Teléfono', categoria: 'Electrónica', precio: 300 }
];

//Utilizando filter debes filtrar productos que tengan la categoría 'Ropa' e imprimirlos en pantalla.
const filtroProductos = productos.filter((producto) => { 
    return producto.categoria === 'Ropa'
})

console.log('*-----------------------------------------------------------------*');
console.log('*---------------------------- PUNTO 3 ----------------------------*');
console.log('*-----------------------------------------------------------------*');
console.log('Filtrar productos que tengan la categoría  \'Ropa \' e imprimirlos en pantalla');
console.log(filtroProductos);

//Filtra los productos con precio mayor de 30 en un nuevo array llamado preciosMayores.
const preciosMayores = productos.filter((producto) => {
    return producto.precio > 30
})

console.log('Filtra los productos con precio mayor de 30 en un nuevo array llamado preciosMayores');
console.log(preciosMayores);

//-----------------------------------------------------------------------------------------------//
//-------------------------------------------> RETO <--------------------------------------------//
//-----------------------------------------------------------------------------------------------//

//encontrar a el/la estudiante con el mayor promedio, utilizando un bucle for o cualquer otro método visto en clase
let nombreEstudiante = '';
let promedioMayor = 0;

for(let i = 0; i < estudiantes.length; i++){
    if(estudiantes[i].promedio > promedioMayor){
        promedioMayor = estudiantes[i].promedio;
        nombreEstudiante = estudiantes[i].nombre;
    }
}

console.log('*-----------------------------------------------------------------*');
console.log('*------------------------------ RETO -----------------------------*');
console.log('*-----------------------------------------------------------------*');
console.log('El estudiante con promedio mayor es: ' + nombreEstudiante + ', con un promedio de: ' + promedioMayor);
