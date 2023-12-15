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
  let robotRow, indexRobot, initialRow, initialIndex

  const MOVE = {
    R: [0, 1],
    L: [0, -1],
    U: [-1, 0],
    D: [1, 0],
  }

  store.forEach((row, rowIndex) => {
    if (row.includes("!")) {
      robotRow = rowIndex
      indexRobot = row.indexOf("!")
      initialRow = robotRow
      initialIndex = indexRobot
    }
  })

  movements.forEach((movement) => {
    const [rowMove, colMove] = MOVE[movement]
    const newRow = robotRow + rowMove
    const newIndex = indexRobot + colMove

    if (
      newRow >= 0 &&
      newRow < store.length &&
      newIndex >= 0 &&
      newIndex < store[0].length &&
      store[newRow][newIndex] !== "*"
    ) {
      robotRow = newRow
      indexRobot = newIndex
    }
  })

  store[initialRow] = store[initialRow].split("")
  store[initialRow][initialIndex] = "."
  store[initialRow] = store[initialRow].join("")
  store[robotRow] = store[robotRow].split("")
  store[robotRow][indexRobot] = "!"
  store[robotRow] = store[robotRow].join("")

  return store
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
