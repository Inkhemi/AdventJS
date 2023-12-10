/*
¡Vaya idea ha tenido Sam Elfman!
 Quiere ofrecer un servicio que te crea un árbol de Navidad 🎄 personalizado en cuestión de segundos.

Para crearlo nos pasan una cadena de caracteres para formar el árbol y un número que indica la altura del mismo.

Cada carácter de la cadena representa un adorno del árbol,
 y vamos utilizándolos de forma cíclica hasta llegar a la altura indicada. Como mínimo siempre nos pasarán uno.

Debemos devolver un string multilínea con el árbol de Navidad formado con los adornos,
 la altura indicada más una última línea con el tronco formado por el carácter | en el centro y, finalmente, un salto de línea \n.
*/

function createChristmasTree(ornaments, height) {
  let tree = ""

  let ornamentIndex = 0
  let cont = 1

  let iterable = ".".repeat(height)

  for (const i of [...iterable].keys()) {
    tree += " ".repeat(height - i - 1)
    for (const j of [..." ".repeat(cont)].keys()) {
      tree += ornaments[ornamentIndex % ornaments.length] + " "
      ornamentIndex++
    }
    tree = tree.slice(0, -1)
    tree += "\n"
    cont++
  }

  tree += " ".repeat(height - 1) + "|\n"

  return tree
}

console.log(createChristmasTree("123", 4))
/*
   1
  2 3
 1 2 3
1 2 3 1 
    |
*/

console.log(createChristmasTree("*@o", 3))
/*
    *
   @ o
  * @ o
    |
*/
