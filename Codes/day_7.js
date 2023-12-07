/*
Santa está experimentando con nuevos diseños de regalos y
 necesita tu ayuda para visualizarlos en 3D.

Tu tarea es escribir una función que, dado un tamaño n (entero),
 genere un dibujo de un regalo en 3D utilizando caracteres ASCII.

Las líneas de los regalos se dibujan con # y
 las caras con el símbolo que nos pasan como parámetro:
*/

function drawGift(size, symbol) {
  if (size === 1) {
    return "#\n"
  }
  let gift = ""

  gift += " ".repeat(size - 1) + "#".repeat(size) + "\n" // Primera linea

  // Cara superior y lateral superior
  for (let i = 0; i < size - 2; i++) {
    gift += " ".repeat(size - i - 2)
    gift += "#" + symbol.repeat(size - 2) + "#" + symbol.repeat(i) + "#\n"
  }

  // Linea del medio
  gift += "#".repeat(size) + symbol.repeat(size - 2) + "#" + "\n"

  // Cara frontal y lateral inferior
  for (let i = size - 2; i > 0; i--) {
    gift += "#" + symbol.repeat(size - 2) + "#" + symbol.repeat(i - 1) + "#\n"
  }

  gift += "#".repeat(size) + "\n" // Última linea

  return gift
}

console.log(drawGift(4, "+"))
/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

console.log(drawGift(5, "*"))
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

console.log(drawGift(1, "^"))
/*
#
*/
