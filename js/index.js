
//* Donde se van a guardar los datos ingresados.

const gastos = []; 

let totalGastos = 0;
let dinero = [];
let totalDinero = 0;

//* Agrega los valores ingresados al array dinero, a su vez aumenta el valor del contador totalDinero

function agregarSueldo() {
  const descripcion = prompt('Descripción del ingreso:');
  let monto;

  do {
    monto = parseFloat(prompt('Ingrese el monto total del depósito:'));
    if (isNaN(monto)) {
      alert('Por favor, ingrese un monto válido.');
    }
  } while (isNaN(monto));

  dinero.push({ descripcion, monto });
  totalDinero += monto;

  alert(`Ingresó: ${descripcion}  $${monto.toFixed(2)}`);
}

//* Esta funcion agrega los valores ingresados como un gasto al array gastos. Aumenta el valor de totalGastos.

function agregarGasto() {
  const descripcion = prompt('Ingrese la descripción del gasto:');
  let monto;

  do {
    monto = parseFloat(prompt('Ingrese el monto del gasto:'));
    if (isNaN(monto)) {
      alert('Por favor, ingrese un monto válido.');
    }
  } while (isNaN(monto));

  gastos.push({ descripcion, monto });
  totalGastos += monto;

  alert(`Gasto agregado: ${descripcion}  $${monto.toFixed(2)}`);
}

//* Recorremos el array para mostrar los gastos con su descripcion y monto. Al final imprimimos el valor de totalGastos. La suma de todos los montos ingresados como gasto.

function mostrarGastos() {
  alert('Lista de gastos:');
  gastos.forEach(gasto => {
    alert(`${gasto.descripcion}: $${gasto.monto.toFixed(2)}`);
  });
  alert(`Total de gastos: $${totalGastos.toFixed(2)}`);
}


//* Para mostrar el saldo que nos queda disponible, tomamos el resultado de totalDinero y lo restamos al totalGastos.

function mostrarSaldo() {
  const saldo = totalDinero - totalGastos;

  if (saldo >= 0) {
    alert(`El saldo disponible es: $${saldo.toFixed(2)}`);
  } else {
    alert(`Tu saldo negativo es de: $${saldo.toFixed(2)}`);
  }
}

//* Hago las preguntas para que empieze el programa o termine

while (true) {
  const opcion = parseInt(prompt('Seleccione una opción:\n1. Ingresar dinero\n2. Ingresar gasto\n3. Mostrar Gastos\n4.Mostrar Saldo\n5. Salir del programa'));

  switch (opcion) {
    case 1:
      agregarSueldo();
      break;
    case 2:
      agregarGasto();
      break;
    case 3:
      mostrarGastos();
      break;
    case 4:
      mostrarSaldo();
      break;
    case 5:
      alert('Saliendo del contador de gastos');
      break;
    default:
      alert('Opción no válida. Intente de nuevo.');
  }

  if (opcion === 5) {
    break;
  }
}