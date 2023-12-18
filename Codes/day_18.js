/*
En la fábrica de juguetes, los elfos están programando un reloj digital para mantenerse en horario con la producción de regalos.
 Sin embargo, se han encontrado con un desafío de programación interesante.
  Necesitan una función que, dada una hora en formato 'HH:MM',
   cree una representación visual de esta hora en un reloj digital devolviendo un array de arrays de caracteres.

La pantalla del reloj tiene 7 filas y 17 columnas, y cada dígito de la hora ocupa 7 filas y 3 columnas.
 Los dígitos están compuestos por asteriscos (*) y espacios en blanco (). Entre cada dígito hay una columna vacía.

Los dos puntos para separar horas y minutos se dibujan usando dos asteriscos (*) y siempre se colocan en la misma posición,
 en las filas 2 y 4, en la columna 9, respectivamente (nota: la indexation de filas y columnas comienza en 0).
*/

function drawClock(time) {
  let hour = [[], [], [], [], [], [], []]

  const numbers = {
    1: [
      [" ", " ", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
    ],
    2: [
      ["*", "*", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      ["*", "*", "*"],
      ["*", " ", " "],
      ["*", " ", " "],
      ["*", "*", "*"],
    ],
    3: [
      ["*", "*", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      ["*", "*", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      ["*", "*", "*"],
    ],
    4: [
      ["*", " ", "*"],
      ["*", " ", "*"],
      ["*", " ", "*"],
      ["*", "*", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
    ],
    5: [
      ["*", "*", "*"],
      ["*", " ", " "],
      ["*", " ", " "],
      ["*", "*", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      ["*", "*", "*"],
    ],
    6: [
      ["*", "*", "*"],
      ["*", " ", " "],
      ["*", " ", " "],
      ["*", "*", "*"],
      ["*", " ", "*"],
      ["*", " ", "*"],
      ["*", "*", "*"],
    ],
    7: [
      ["*", "*", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
    ],
    8: [
      ["*", "*", "*"],
      ["*", " ", "*"],
      ["*", " ", "*"],
      ["*", "*", "*"],
      ["*", " ", "*"],
      ["*", " ", "*"],
      ["*", "*", "*"],
    ],
    9: [
      ["*", "*", "*"],
      ["*", " ", "*"],
      ["*", " ", "*"],
      ["*", "*", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      ["*", "*", "*"],
    ],
    0: [
      ["*", "*", "*"],
      ["*", " ", "*"],
      ["*", " ", "*"],
      ["*", " ", "*"],
      ["*", " ", "*"],
      ["*", " ", "*"],
      ["*", "*", "*"],
    ],
    ":": [[" "], [" "], ["*"], [" "], ["*"], [" "], [" "]],
  }

  const iterable = ".".repeat(7)

  for (const number of time) {
    if (number === ":") {
      for (const i of [...iterable].keys()) {
        hour[i].push(...numbers[number][i], " ")
      }
    } else {
      for (const i of [...iterable].keys()) {
        hour[i].push(...numbers[number][i], " ")
      }
    }
  }

  for (const i of [...iterable].keys()) {
    hour[i].pop()
  }

  return hour
}

console.log(drawClock("01:30"))
// ⬇️
/*
  [
    ['*', '*', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', '*', '*'],
    ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
    ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
    ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', ' ', '*'],
    ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
    ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
    ['*', '*', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', '*', '*']
  ]
*/
