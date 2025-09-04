// Archivo para manejar el almacenamiento y visualización del listado usando localStorage

// Referencias a elementos del DOM
const inputItem = document.getElementById('item');
const btnAgregar = document.getElementById('agregar');
const btnLimpiar = document.getElementById('limpiar');
const contenedor = document.getElementById('contenedor');

// Clave para almacenar el listado en localStorage
const CLAVE_LISTADO = 'listadoItems';

// Función para obtener el listado guardado en localStorage
function obtenerListado() {
  const listadoGuardado = localStorage.getItem(CLAVE_LISTADO);
  return listadoGuardado ? JSON.parse(listadoGuardado) : [];
}

// Función para guardar el listado en localStorage
function guardarListado(listado) {
  localStorage.setItem(CLAVE_LISTADO, JSON.stringify(listado));
}

// Función para actualizar la vista del listado en la página
function actualizarVista() {
  const listado = obtenerListado();
  contenedor.innerHTML = ''; // Limpiar la vista actual

  listado.forEach((item, index) => {
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = item;
    contenedor.appendChild(li);
  });
}

// Función para agregar un nuevo ítem al listado
function agregarItem() {
  const nuevoItem = inputItem.value.trim();

  if (nuevoItem.length > 0) {
    const listado = obtenerListado();
    listado.push(nuevoItem);
    guardarListado(listado);
    actualizarVista();
    inputItem.value = ''; // Limpiar el campo de entrada
    inputItem.focus();
  }
}

// Función para limpiar el listado almacenado y la vista
function limpiarListado() {
  localStorage.removeItem(CLAVE_LISTADO);
  actualizarVista();
}

// Eventos para los botones
btnAgregar.addEventListener('click', agregarItem);
btnLimpiar.addEventListener('click', limpiarListado);

// Inicializar la vista al cargar la página
actualizarVista();
