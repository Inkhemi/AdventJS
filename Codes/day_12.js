/*
En el Polo Norte todavía usan fotocopiadoras de papel.
 Los elfos las usan para copiar las cartas que los niños envían a Santa y así poder enviarlas a todos los departamentos de regalos.

Sin embargo ya son muy viejas y no funcionan muy bien.
 Cada vez que hacen una copia, la calidad de la copia disminuye ligeramente, un fenómeno conocido como pérdida generacional.

Necesitas detectar si una carta es una copia de otra.
 Las cartas son muy largas y no puedes leerlas, pero puedes compararlas con un algoritmo.

Existe una gran probabilidad de que un carácter se degrade en cada copia (¡no pasa siempre!).
 Y al ocurrir, la regla que sigue es:
 - Los caracteres de la A a la Z se degradan de mayúsculas a minúsculas (A-Z ⇒ a-z)
 - Las letras se degradan en una serie de caracteres en este orden: a-z ⇒ # ⇒ + ⇒ : ⇒ . ⇒
 - Los caracteres que no son letras (como los dígitos) no se degradan.

 Sabiendo esto y recibiendo la carta original y la copia,
  debes determinar si la copia es una copia de la original.
*/

function checkIsValidCopy(original, copy) {
  let symbols = { "#": 1, "+": 2, ":": 3, ".": 4, " ": 5 }

  const iterable = ".".repeat(original.length)

  for (const i of [...iterable].keys()) {
    if (original[i] === copy[i] || original[i].toLowerCase() === copy[i]) {
      continue
    }

    if (
      symbols[copy[i]] &&
      original[i].toLowerCase != original[i].toUpperCase() &&
      original[i] !== " "
    ) {
      continue
    }

    return false
  }
  return true
}

console.log(checkIsValidCopy("Santa Claus is coming", "sa#ta cl#us is comin#"))
// true
console.log(checkIsValidCopy("Santa Claus is coming", "p#nt: cla#s #s c+min#"))
// false (por la p inicial)
console.log(checkIsValidCopy("Santa Claus", "s#+:. c:. s"))
// true
console.log(checkIsValidCopy("Santa Claus", "s#+:.#c:. s"))
// false (hay un # donde no debería)
