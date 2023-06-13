// Obtener referencia al elemento de la pantalla
const pantalla = document.getElementById('result');

// Obtener referencia a los botones "Clear" y "Delete"
const clearButton = document.getElementById('clear');
const deleteButton = document.getElementById('delete');

// Variable para almacenar el primer número de la operación
let primerNumero = '';

// Variable para almacenar el operador seleccionado
let operador = '';

// Función para realizar la operación y mostrar el resultado en la pantalla
function calcular() {
  // Obtener el segundo número de la operación
  const segundoNumero = pantalla.innerText;

  let resultado = 0;

  // Realizar la operación según el operador seleccionado
  switch (operador) {
    case '+':
      resultado = parseFloat(primerNumero) + parseFloat(segundoNumero);
      break;
    case '-':
      resultado = parseFloat(primerNumero) - parseFloat(segundoNumero);
      break;
    case '×':
      resultado = parseFloat(primerNumero) * parseFloat(segundoNumero);
      break;
    case '÷':
      resultado = parseFloat(primerNumero) / parseFloat(segundoNumero);
      break;
    default:
      return;
  }

  // Actualizar el contenido de la pantalla con el resultado
  pantalla.innerText = resultado;

  // Reiniciar las variables para la siguiente operación
  primerNumero = '';
  operador = '';
}

// Función para borrar todo el contenido de la pantalla
function borrarTodo() {
  pantalla.innerText = 'Introduce un valor';
  primerNumero = '';
  operador = '';
}

// Función para borrar el último número o valor escrito en la pantalla
function borrarUltimo() {
  pantalla.innerText = pantalla.innerText.slice(0, -1);
}

// Agregar evento click al botón "Clear"
clearButton.addEventListener('click', borrarTodo);

// Agregar evento click al botón "Delete"
deleteButton.addEventListener('click', borrarUltimo);

// Obtener referencia a los botones numéricos y operadores
const botones = document.querySelectorAll('.intermedium1, .intermedium2, .intermedium3, .intermedium4');

// Variable para controlar si se debe borrar el contenido en la pantalla
let borrarContenido = false;

// Variable para controlar si se ha ingresado un punto decimal
let puntoDecimalIngresado = false;

// Iterar sobre cada botón y agregar un evento click
botones.forEach(boton => {
  boton.addEventListener('click', function() {
    const valor = this.innerText;

    if (valor === '.') {
      // Verificar si ya se ha ingresado un punto decimal
      if (!puntoDecimalIngresado) {
        // Verificar si se debe borrar el contenido
        if (pantalla.innerText === 'Introduce un valor' || borrarContenido) {
          pantalla.innerText = '';
          borrarContenido = false;
        }
        pantalla.innerText += valor;
        puntoDecimalIngresado = true;
      }
    } else if (!isNaN(parseFloat(valor))) {
      // Verificar si se debe borrar el contenido
      if (pantalla.innerText === 'Introduce un valor' || borrarContenido) {
        pantalla.innerText = '';
        borrarContenido = false;
      }
      pantalla.innerText += valor;
    } else if (valor === '=') {
      calcular();
    } else if (valor === 'clear') {
      borrarTodo();
    } else if (valor === 'delete') {
      borrarUltimo();
    } else {
      primerNumero = pantalla.innerText;
      operador = valor;
      borrarContenido = true;
    }
  });
});
