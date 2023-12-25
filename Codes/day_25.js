/*
 Ya ha entregado Santa Claus 🎅 todos los regalos a los niños pero quieren revisar si pueden mejorar de cara al año que viene.

 Los elfos quieren saber cuántos movimientos ha hecho Santa Claus 🛷 para entregar todos los regalos.
  Para ello, te dan un mapa de la ciudad con la ubicación de cada niño y de Santa.

 El mapa es una cadena de texto multi línea donde cada carácter representa una casilla.
  Los niños se representan por números del 1 al 9 y Santa Claus por la letra S. El resto de casillas son .

 Santa Claus sólo puede moverse hacia arriba, abajo, izquierda o derecha, y cada movimiento cuenta como 1 km.
  Además, siempre empieza en la posición S y debe entregar los regalos en orden, del 1 al 9.
*/

function travelDistance(map) {
  let moves = 0

  const matrix = map.split("\n").map((line) => line.split(""))

  let santaRow = 0
  let santaCol = 0
  matrix.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      if (col === "S") {
        santaRow = rowIndex
        santaCol = colIndex
      }
    })
  })

  const children = []
  matrix.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      if (col !== "." && col !== "S") {
        children[col] = { row: rowIndex, col: colIndex }
      }
    })
  })

  for (let i = 1; i < children.length; i++) {
    const child = children[i]
    const distance =
      Math.abs(santaRow - child.row) + Math.abs(santaCol - child.col)
    moves += distance
    santaRow = child.row
    santaCol = child.col
  }

  return moves
}

const map = `.....1....
..S.......
..........
....3.....
......2...`

const result = travelDistance(map)
console.log(result)
// -> 12 km
/*
De la S al niño 1: 4 movimientos
Del niño 1 al 2: 5 movimientos
Del niño 2 al 3: 3 movimientos
Total: 12 movimientos
*/

const result2 = travelDistance(`..S.1...`)
console.log(result2)
// -> 2
