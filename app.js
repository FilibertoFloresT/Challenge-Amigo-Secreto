// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Se declara la variable amigo, que es una lista vacía donde se agregaran los nombres de amigos, se crea el array
let amigo = [];

// Permite el funcionamiento de el botón agregar amigo
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;

    // El if avisa que si no se escribe ningún nombre, se muestra un mensaje "Por favor, inserte un nombre"
    if (!nombreAmigo) {
        alert("Por favor, inserte un nombre");
        return;
   
    // amigo.push agrega el amigo a la lista
    }
    amigo.push(nombreAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    renderizarAmigos();

}

function renderizarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigo.length; i++) {
        let item = document.createElement("li")
        item.textContent = amigo[i];
        listaAmigos.appendChild(item);

    }
}
// Se genera la función sortear amigo, donde si no hay nada en la lista, se muestra un mensaje "No hay amigos para sortear"
function sortearAmigo() {
    if(amigo.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }
//La función para sortear amigo genera un número aleatorio entre las posiciones de la lsita, el cuál resulta ser el amigo sorteado
    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";
}
