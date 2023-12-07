/*
En el taller de Santa 🎅, algunos mensajes navideños han sido escritos de manera peculiar:
 las letras dentro de los paréntesis deben ser leídas al revés

Santa necesita que estos mensajes estén correctamente formateados.
 Tu tarea es escribir una función que tome una cadena de texto y
  revierta los caracteres dentro de cada par de paréntesis, eliminando los paréntesis en el mensaje final.

Eso sí, ten en cuenta que pueden existir paréntesis anidados,
 por lo que debes invertir los caracteres en el orden correcto.
*/

function decode(message) {
  let result = ""
  let stack = []

  const iterable = "-".repeat(message.length)

  for (const i of [...iterable].keys()) {
    const char = message[i]

    if (char === "(") {
      stack.push(result)
      result = ""
    } else if (char === ")") {
      result = result.split("").reverse().join("")
      result = stack.pop() + result
    } else {
      result += char
    }
  }

  return result
}

const a = decode("hola (odnum)")
console.log(a) // hola mundo

const b = decode("(olleh) (dlrow)!")
console.log(b) // hello world!

const c = decode("sa(u(cla)atn)s")
console.log(c) // santaclaus

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus
