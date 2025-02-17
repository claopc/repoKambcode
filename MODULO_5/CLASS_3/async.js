const esperarSegundos = async (segundos) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {  
           
            const init = 0;                        

            if(segundos > init){                               
                resolve("Han pasado " + segundos + " segundos");
            }else{               
                reject("Error: los segundos no pueden ser negativos");
            }
            
        }, segundos)        
    })
}

export default esperarSegundos;    