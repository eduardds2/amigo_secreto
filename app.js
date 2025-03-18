// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
  const amigoInput = document.getElementById("amigo");
  const nombreAmigo = amigoInput.value.trim();

  if (nombreAmigo) {
    amigos.push(nombreAmigo);
    actualizarListaAmigos();
    amigoInput.value = ""; // Limpiar el campo de entrada
  }
}

function actualizarListaAmigos() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = ""; // Limpiar la lista

  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Se necesitan al menos 2 amigos para el sorteo.");
    return;
  }

  const amigosCopia = [...amigos];
  for (let i = amigosCopia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [amigosCopia[i], amigosCopia[j]] = [amigosCopia[j], amigosCopia[i]];
  }

  const resultado = {};
  for (let i = 0; i < amigos.length; i++) {
    resultado[amigos[i]] = amigosCopia[(i + 1) % amigos.length];
  }

  mostrarResultado(resultado);
}

function mostrarResultado(resultado) {
  const resultadoLista = document.getElementById("resultado");
  resultadoLista.innerHTML = ""; // Limpiar resultados anteriores

  for (const amigo in resultado) {
    const amigoSecreto = resultado[amigo];
    const li = document.createElement("li");
    li.textContent = `${amigo} le regala a ${amigoSecreto}`;
    resultadoLista.appendChild(li);
  }
}