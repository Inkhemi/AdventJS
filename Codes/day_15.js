/*
Estamos programando unos robots llamados giftbot 🤖🎁 que navegan de forma autónoma por los almacenes de regalos.

Estamos creando una función a la que le pasamos: el almacén 🏬 que deben navegar y los movimientos ↔️ que pueden realizar.

El almacén se representa como un array de cadenas de texto, donde:

- . significa que hay vía libre.
- * significa que hay un obstáculo.
- ! es la posición inicial del robot.
Los movimientos son un array de cadenas de texto, donde:

- R mueve al robot una posición a la derecha.
- L mueve al robot una posición a la izquierda.
- U mueve al robot una posición hacia arriba.
- D mueve al robot una posición hacia abajo.
- Hay que tener en cuenta que el robot no puede superar los obstáculos ni los límites del almacén.

Dados un almacén y los movimientos, debemos devolver el array con la posición final de nuestro robot.
*/

function autonomousDrive(store, movements) {
  let robotRow
  let robotIndex
  let initialIndex
  let initialRow

  for (const [index, row] of store.entries()) {
    if (row.includes("!")) {
      robotRow = index
      initialRow = robotRow
      robotIndex = row.indexOf("!")
      initialIndex = robotIndex
    }
  }

  for (const move of movements) {
    switch (move) {
      case "R":
        if (
          store[robotRow][robotIndex + 1] !== "*" &&
          robotIndex < store[robotRow].length - 1
        ) {
          robotIndex += 1
        }
        break
      case "L":
        if (store[robotRow][robotIndex - 1] !== "*" && robotIndex > 0) {
          robotIndex -= 1
        }
        break
      case "U":
        if (robotRow > 0) {
          if (store[robotRow - 1][robotIndex] !== "*") {
            robotRow -= 1
          }
        }
        break
      case "D":
        if (robotRow < store.length - 1) {
          if (store[robotRow + 1][robotIndex] !== "*") {
            robotRow += 1
          }
        }
        break
    }
  }

  let newStore = store
  newStore[initialRow] = newStore[initialRow].split("")
  newStore[initialRow][initialIndex] = "."
  newStore[initialRow] = newStore[initialRow].join("")
  newStore[robotRow] = newStore[robotRow].split("")
  newStore[robotRow][robotIndex] = "!"
  newStore[robotRow] = newStore[robotRow].join("")

  return newStore
}

const store = ["..!....", "...*.*."]

const movements = ["R", "R", "D", "L"]
const result = autonomousDrive(store, movements)
console.log(result)
/*
  [
    ".......",
    "...*!*."
  ]
  */

// El último movimiento es hacia la izquierda, pero no puede moverse porque hay un obstáculo.

console.log(autonomousDrive(["..!...."], ["R", "L"]))
/*
  [
    "..!...."
  ]
*/
