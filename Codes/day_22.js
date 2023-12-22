/*
En la fábrica de juguetes de Santa, los elfos están desarrollando un lenguaje de programación llamado Santa.js
 👨‍💻👩‍💻 basado en símbolos para controlar sus máquinas de juguetes 🚂.

Han creado un sistema de instrucciones simple y necesitan tu ayuda para construir un compilador que interprete estos símbolos.

El compilador trabaja con un contador que inicialmente tiene un valor de 0. Las instrucciones modificarán el valor de este contador.

Instrucciones del lenguaje de los elfos en base a símbolos:

- +: Incrementa en 1 el valor del contador.
- *: Multiplica por 2 el valor del contador.
- -: Resta 1 al valor del contador.
- %: Marca un punto de retorno. No modifica el contador.
- <: Vuelve atrás una vez a la última instrucción con el símbolo % que haya visto. Si no hay un % previo, no hace nada.
- ¿: Inicia un bloque condicional que se ejecuta si el contador es mayor a 0.
- ?: Finaliza un bloque condicional.
*/

function compile(code) {
  let result = arguments[1] ?? 0
  let ret = -1
  let cond = true

  for (const [index, operation] of code.split("").entries()) {
    switch (operation) {
      case "+":
        if (cond) {
          result += 1
        }
        break
      case "*":
        if (cond) {
          result *= 2
        }
        break
      case "-":
        if (cond) {
          result -= 1
        }
        break
      case "%":
        if (cond) {
          ret = index
        }
        break
      case "<":
        if (ret > 0 && cond) {
          code = code.slice(ret, index)
          for (const operation of code) {
            result = compile(operation, result)
          }
        }
        break
      case "¿":
        if (cond) {
          cond = result > 0
        }

        break
      case "?":
        cond = true

        break
    }
  }

  return result
}

console.log(compile("++*-"))
// 3
// (1 + 1) * 2 - 1 = 3

console.log(compile("++%++<"))
// 6
// 1 + 1 + 1 + 1 + 1 + 1 = 6

console.log(compile("++<--"))
// 0
// 1 + 1 - 1 - 1 = 0

console.log(compile("++¿+?"))
// 3
// 1 + 1 + 1 = 3

console.log(compile("--¿+++?"))
// -2
// - 1 - 1 = -2

console.log(compile("++%++<++¿*?"))
