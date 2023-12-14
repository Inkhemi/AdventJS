/*
En el taller de Santa, los elfos aman los acertijos 🧠.
 Este año, han creado uno especial: un desafío para formar un palindromo navideño.

Un palindromo es una palabra que se lee igual hacia adelante y hacia atrás.
 Los elfos quieren saber si es posible formar un palindromo haciendo, como mucho, un intercambio de letras.

Crea una función getIndexsForPalindrome que reciba una cadena de caracteres y devolverá:

Si ya es un palindromo, un array vacío.
Si no es posible, null.
Si se puede formar un palindromo con un cambio,
 un array con las dos posiciones (índices) que se deben intercambiar para poder crearlo.
*/

function getIndexsForPalindrome(word) {
  const reverseWord = word.split("").reverse().join("")

  if (word === reverseWord) {
    return []
  }

  let iterable = ",".repeat(word.length)

  for (const i of [...iterable].keys()) {
    for (const j of [...iterable].keys()) {
      const newWord =
        word.slice(0, i) +
        word[j] +
        word.slice(i + 1, j) +
        word[i] +
        word.slice(j + 1)

      const reverseNewWord = newWord.split("").reverse().join("")

      if (newWord === reverseNewWord) {
        return [i, j]
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
