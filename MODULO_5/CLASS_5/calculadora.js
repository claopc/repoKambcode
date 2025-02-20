//Se eliminan los valores por defecto
const args = process.argv.splice(2);

//Se toman los valores ingresados en la línea de comandos
const [numero1, operacion, numero2] = args;

let resultado = 0;

//Se valida la integridad de los números
if(isNaN(numero1) || isNaN(numero2)){
    console.log("Los valores ingresados no son números");
    process.exit(1);
}

//Se convierten los números para poder realizar las operaciones matemáticas
const numero1Float = parseFloat(numero1);
const numero2Float = parseFloat(numero2);

//Se valida la operación
if(operacion === "+"){
    resultado = numero1Float + numero2Float;
} else if(operacion === "-"){
    resultado = numero1Float - numero2Float;
}else if(operacion === "*"){
    resultado = numero1Float * numero2Float;
}else if(operacion === "/"){
    if(numero2Float === 0){
        console.log("No se puede dividir por 0");
        process.exit(1);
    }
    resultado = numero1Float / numero2Float;    
}else{
    console.log("Ingresa una operación válida");
    process.exit(1);
}

//Se imprime el resultado de la operación
console.log(`El resultado de la operación es: ${resultado}`);