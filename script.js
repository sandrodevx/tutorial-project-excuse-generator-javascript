// Arrays de las diferentes partes de la excusa
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed on', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car', 'my laptop'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

// Función para generar una excusa aleatoria
function generateExcuse() {
    let whoRandom = who[Math.floor(Math.random() * who.length)];
    let actionRandom = action[Math.floor(Math.random() * action.length)];
    let whatRandom = what[Math.floor(Math.random() * what.length)];
    let whenRandom = when[Math.floor(Math.random() * when.length)];
    return `${whoRandom} ${actionRandom} ${whatRandom} ${whenRandom}.`;
}

// Función para actualizar la excusa con efecto
function updateExcuse() {
    let excuseElement = document.getElementById('excuse');
    excuseElement.classList.add('fade');
    setTimeout(function() {
        excuseElement.innerHTML = generateExcuse();
        excuseElement.classList.remove('fade');
    }, 1000);
}

// Al cargar la página, genera la primera excusa
window.onload = function() {
    document.getElementById('excuse').innerHTML = generateExcuse();
};

// Asigna el evento al botón (¡Aquí está la magia!)
document.getElementById('generateBtn').addEventListener('click', updateExcuse);