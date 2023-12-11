/*
En el taller de Santa, los elfos aman los acertijos 🧠.
 Este año, han creado uno especial: un desafío para formar un palíndromo navideño.

Un palíndromo es una palabra que se lee igual hacia adelante y hacia atrás.
 Los elfos quieren saber si es posible formar un palíndromo haciendo, como mucho, un intercambio de letras.

Crea una función getIndexsForPalindrome que reciba una cadena de caracteres y devolverá:

Si ya es un palíndromo, un array vacío.
Si no es posible, null.
Si se puede formar un palíndromo con un cambio,
 un array con las dos posiciones (índices) que se deben intercambiar para poder crearlo.
*/

function getIndexsForPalindrome(word) {
  let reverseWord = ""
  let index = []

  const wordLength = " ".repeat(word.length)

  for (const i of [...wordLength].keys()) {
    reverseWord = word[i] + reverseWord
  }

  if (word === reverseWord) return []

  for (const i of [...wordLength].keys()) {
    for (const j of [...wordLength].keys()) {
      if (i !== j) {
        const newWord =
          word.slice(0, i) +
          word[j] +
          word.slice(i + 1, j) +
          word[i] +
          word.slice(j + 1)

        let reverseNewWord = ""

        for (const k of [...wordLength].keys()) {
          reverseNewWord = newWord[k] + reverseNewWord
        }

        if (newWord === reverseNewWord) {
          index.push(i)
          index.push(j)
          return index
        }
      }
    }
  }

  return null
}

console.log(getIndexsForPalindrome("anna"))
// []
console.log(getIndexsForPalindrome("abab"))
// [0, 1]
console.log(getIndexsForPalindrome("abac"))
// null
console.log(getIndexsForPalindrome("aaaaaaaa"))
// []
console.log(getIndexsForPalindrome("aaababa"))
// [1, 3]
console.log(getIndexsForPalindrome("caababa"))
// null
