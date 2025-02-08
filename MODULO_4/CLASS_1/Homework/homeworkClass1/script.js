// Crear un elemento 'div'
const div = document.createElement('div');

// Agregar un atributo 'id' al elemento div que acabo de crear
div.id = 'miDiv';

// Agregar texto al 'div'
div.textContent = 'texto div';


// Cambiar el color de fondo del 'div'
div.style.backgroundColor = 'lightblue';

// Agregar el 'div' al cuerpo del documento
document.body.appendChild(div);