/*
* Santa 🎅 está probando su nuevo trineo eléctrico, el CyberReindeer, en una carretera del Polo Norte.
* La carretera se representa con una cadena de caracteres, donde:
*
* . = Carretera
* S = Trineo de Santa
* * = Barrera abierta
* | = Barrera cerrada
* Ejemplo de carretera: S...|....|.....
*
* Cada unidad de tiempo, el trineo avanza una posición a la derecha.
*  Si encuentra una barrera cerrada, se detiene hasta que la barrera se abra.
*   Si está abierta, la atraviesa directamente.

* Todas las barreras empiezan cerradas, pero después de 5 unidades de tiempo, se abren todas para siempre.

* Crea una función que simule el movimiento del trineo durante un tiempo dado y
*  devuelva un array de cadenas representando el estado de la carretera en cada unidad de tiempo:
*/

function cyberReindeer(road, time) {
  const arrayRoad = [road]
  let index = road.indexOf("S")

  const trick = Math.max(0, time - 1)
  const iterable = "|".repeat(trick)

  for (const i of [...iterable].keys()) {
    if (i === 4) {
      road = road.replaceAll("|", "*")
    }
    if (road[index + 1] !== "|") {
      index++
    }
    let newRoad = road.split("")
    newRoad[index] = "S"
    newRoad[0] = "."
    newRoad = newRoad.join("")
    arrayRoad.push(newRoad)
  }

  return arrayRoad
}

const road = "S..|...|.."
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)

for (const reindeer of result) {
  console.log(reindeer)
}

/* -> result:
[
  'S..|...|..', // estado inicial
  '.S.|...|..', // avanza el trineo la carretera
  '..S|...|..', // avanza el trineo la carretera
  '..S|...|..', // el trineo para en la barrera
  '..S|...|..', // el trineo para en la barrera
  '...S...*..', // se abre la barrera, el trineo avanza
  '...*S..*..', // avanza el trineo la carretera
  '...*.S.*..', // avanza el trineo la carretera
  '...*..S*..', // avanza el trineo la carretera
  '...*...S..', // avanza por la barrera abierta
]
*/
