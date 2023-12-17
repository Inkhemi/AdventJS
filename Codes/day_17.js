/*
En Rovaniemi, Finlandia 🇫🇮, los trineos 🛷 se alquilan por intervalos de tiempo.
 Cada intervalo se representa como un array de dos elementos,
  donde el primer elemento es el inicio del alquiler y el segundo es el final.

Por ejemplo, el array [2, 7] representa un alquiler que comienza en la hora 2 y termina en la hora 7.
 El problema es que a veces los intervalos se superponen entre sí,
  haciendo que sea un lío entender de qué hora a qué hora se alquiló el trineo.

Nos piden que, para simplificar la tarea de calcular el tiempo total de alquiler,
 escribamos una función que fusione todos los intervalos superpuestos y devolver un array de intervalos ordenados
*/

function optimizeIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  let result = []

  for (const [index, [start, end]] of intervals.entries()) {
    if (index === 0) {
      result.push([start, end])
      continue
    }

    for (const [index, [startInterval, endInterval]] of result.entries()) {
      if (start <= endInterval && end >= startInterval) {
        result[index][0] = Math.min(start, startInterval)
        result[index][1] = Math.max(end, endInterval)
        break
      } else if (index === result.length - 1) {
        result.push([start, end])
        break
      }
    }
  }

  return result
}

console.log(
  optimizeIntervals([
    [5, 8],
    [2, 7],
    [3, 4],
  ])
)
// [[2, 8]]

console.log(
  optimizeIntervals([
    [1, 3],
    [8, 10],
    [2, 6],
  ])
)
// [[1, 6], [8, 10]]

console.log(
  optimizeIntervals([
    [3, 4],
    [1, 2],
    [5, 6],
  ])
)
// [[1, 2], [3, 4], [5, 6]]
