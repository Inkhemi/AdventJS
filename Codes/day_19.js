/*
¡Alerta en la fábrica de juguetes de Santa! El Grinch 😈 se ha infiltrado en el almacén y ha saboteado algunos de los juguetes 💣.

Los elfos necesitan ayuda para encontrar los juguetes saboteados y eliminarlos antes de que llegue la Navidad.
 Para ello tenemos el mapa 🗺️ del almacén, que es una matriz.

Los * representan los juguetes saboteados y las celdas vacías con un espacio en blanco son los lugares seguros.

Tu tarea es escribir una función que devuelva la misma matriz pero, en cada posición,
 nos indique el número de juguetes saboteados que hay en las celdas adyacentes.

Si una celda contiene un juguete saboteado, debe permanecer igual.
 Si una celda no toca ningún juguete saboteado, debe contener un espacio en blanco .
*/

function revealSabotage(store) {
  for (const [index, row] of store.entries()) {
    for (const [elementIndex, element] of row.entries()) {
      if (element === "*") {
        continue
      }
      let count = 0

      if (store[index - 1] && store[index - 1][elementIndex] === "*") {
        count++
      }
      if (store[index + 1] && store[index + 1][elementIndex] === "*") {
        count++
      }
      if (store[index][elementIndex - 1] === "*") {
        count++
      }
      if (store[index][elementIndex + 1] === "*") {
        count++
      }
      if (store[index - 1] && store[index - 1][elementIndex - 1] === "*") {
        count++
      }
      if (store[index - 1] && store[index - 1][elementIndex + 1] === "*") {
        count++
      }
      if (store[index + 1] && store[index + 1][elementIndex - 1] === "*") {
        count++
      }
      if (store[index + 1] && store[index + 1][elementIndex + 1] === "*") {
        count++
      }
      if (count !== 0) {
        store[index][elementIndex] = count.toString()
      }
    }
  }

  return store
}

const store = [
  ["*", " ", " ", " "],
  [" ", " ", "*", " "],
  [" ", " ", " ", " "],
  ["*", " ", " ", " "],
]

console.log(revealSabotage(store))
/* Debería mostrar:
  [
      ['*', '2', '1', '1'],
      ['1', '2', '*', '1'],
      ['1', '2', '1', '1'],
      ['*', '1', ' ', ' ']
  ]
  */
