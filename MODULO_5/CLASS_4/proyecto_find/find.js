import {    
    createReadStream,
    writeFile
} from 'fs';

//Lee el archivo numeros.txt y muestra en consola los números pares
const stream = createReadStream('C:/Users/CLAOP/OneDrive/Documentos/Kambcode/RepoKambcode/repoKambcode/MODULO_5/CLASS_4/proyecto_generator/numeros.txt');

stream.on('data', (chunk) => {    
    const numberString = chunk.toString().split(',');
    let numerosPares = [];
    let numerosImpares = [];

    for(let i = 0; i < numberString.length; i++) {
        const numero = parseInt(numberString[i]);  
            
        if (numero % 2 === 0) {
            console.log('El número ' + numero + ' es par') //  es par
            
            numerosPares.push(numero);                        
        }else{
            numerosImpares.push(numero);
        }
    }
    
    //Escribe un archivo con los números pares separados por coma   
    writeFile('./numeros_pares.txt', numerosPares.join(', '), 'utf8', (error) => {
        if (error) {
            console.error(error + 'Error al escribir el archivo');
        } 
    });

    //Escribe un archivo con los números impares separados por coma
    writeFile('./numeros_impares.txt', numerosImpares.join(', '), 'utf8', (error) => {
        if (error) {
            console.error(error + 'Error al escribir el archivo');
        } 
    })
})


