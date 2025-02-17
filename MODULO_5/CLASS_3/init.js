import esperarSegundos from './async.js';

esperarSegundos(500)
    .then((resultado) => console.log(resultado))
    .catch((error) => console.log(error))
