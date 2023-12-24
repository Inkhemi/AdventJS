/*
En la aldea de Santa, hay una escalera mágica que lleva a la fábrica de juguetes 🧸. Los elfos, siempre buscando hacer ejercicio y divertirse 🏃‍♂️,
 deciden saltar los peldaños de la escalera.

Nos dan steps como el número de peldaños de la escalera y el número máximo de peldaños maxJump que un elfo puede saltar en un solo salto.

Tu tarea es ayudar a los elfos a encontrar todas las posibles secuencias de saltos que pueden hacer para subir la escalera,
 ordenadas de menos a más. Teniendo en cuenta que los elfos pueden saltar como máximo maxJump peldaños en un solo salto
  (pero pueden saltar menos peldaños si así lo desean).
*/

function getStaircasePaths(steps, maxJump) {
  const result = []

  const getPaths = (steps, maxJump, path) => {
    if (steps === 0) {
      result.push(path)
      return
    }

    for (let i = 1; i <= maxJump && i <= steps; i++) {
      getPaths(steps - i, maxJump, [...path, i])
    }
  }

  getPaths(steps, maxJump, [])

  return result
}

console.log(getStaircasePaths(2, 1))
// [[1, 1]]
console.log(getStaircasePaths(3, 3))
// [[1, 1, 1], [1, 2], [2, 1], [3]]
console.log(getStaircasePaths(5, 1))
// [[1, 1, 1, 1, 1]]
console.log(getStaircasePaths(5, 2))
/*
[
  [1, 1, 1, 1, 1],
  [1, 1, 1, 2],
  [1, 1, 2, 1],
  [1, 2, 1, 1],
  [1, 2, 2],
  [2, 1, 1, 1],
  [2, 1, 2],
  [2, 2, 1],
]
*/
