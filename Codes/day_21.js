/*
Los elfos están recibiendo mensajes binarios extraños desde Marte 🪐. ¿Los extraterrestres están tratando de comunicarse con ellos? 👽

El mensaje que llega es un array de 0s y 1s. Parece que han encontrado un patrón… Para asegurarse,
 quieren encontrar el segmento más largo de la cadena donde el número de 0s y 1s sea igual.
*/

function findBalancedSegment(message) {
  const result = []

  for (const [index, value] of message.entries()) {
    let count0 = 0
    let count1 = 0
    for (let i = index; i < message.length; i++) {
      if (message[i] === 0) {
        count0++
      } else {
        count1++
      }
      if (count0 === count1) {
        result.push([index, i])
      }
    }
  }

  if (result.length > 0) {
    const longest = result.reduce((acc, curr) => {
      if (curr[1] - curr[0] > acc[1] - acc[0]) {
        return curr
      }
      return acc
    })
    return longest
  }

  return result
}

console.log(findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1]))
//                                     |________|
// posición del segmento:               [2, 5]
// más largo equilibrado
// de 0s y 1s

console.log(findBalancedSegment([1, 1, 0]))
//                                  |__|
//                                 [1, 2]

console.log(findBalancedSegment([1, 1, 1]))
// no hay segmentos equilibrados: []

/*
Ten en cuenta que si hay más de un patrón equilibrado, debes devolver el más largo y el primero que encuentres de izquierda a derecha.

Dicen que si encuentran el patrón, podrán enviar un mensaje de vuelta a Marte 🚀. Parece ser que tienen que enviarlos a https://mars.codes. */
