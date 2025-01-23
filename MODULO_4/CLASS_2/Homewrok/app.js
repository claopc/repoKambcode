//Se crean las variables para manejar los datos
let img = document.getElementById('img-card');
let cell = document.getElementById('info-cell-card');
let email = document.getElementById('info-email-card');
let gender = document.getElementById('info-gender-card');
let name = document.getElementById('info-name-card');
let button = document.getElementById('btnUpdate');

//Se crea la función para capturar los datos del api
async function userUpdate() {
    const url = 'https://randomuser.me/api/';
    const response = await fetch(url);
    const data = await response.json();

    img.innerHTML = `<img src='${data.results[0].picture.large}'></img>`
    name.innerHTML = `<h1>${data.results[0].name.first + ' ' + data.results[0].name.last}</h1>`
    gender.innerHTML = `<h3>${data.results[0].gender}</h3>`
    cell.innerHTML = `<h3>${data.results[0].cell}</h3>`
    email.innerHTML = `<h3>${data.results[0].email}</h3>`        
}

//Se configura el botón para mostrar los datos
button.addEventListener('click', userUpdate);