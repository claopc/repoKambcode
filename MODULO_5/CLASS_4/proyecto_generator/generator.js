import {
    createWriteStream
} from 'fs';

//Crea el archivo numeros.txt 
const buffer = Buffer.from('Hellou World');
console.log(buffer.toString());

const stream = createWriteStream('./numeros.txt');

for(let i = 1; i <= 1000; i++) {
    if (i === 1000){
        stream.write(`${i}`);
    }else{
        stream.write(`${i},`);
    }    
}
console.log('Archivo creado exitosamente');
stream.end();
