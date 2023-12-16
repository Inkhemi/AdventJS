/*
Ayer viernes alguien hizo despliegue a producción y se rompió la aplicación de montaje de árboles de Navidad.
 Nos han pedido que lo arreglemos lo antes posible.

El problema es que el formato de los árboles ha cambiado.
 Es un array de números… ¡pero debería ser un objeto! Por ejemplo el árbol: [3, 1, 0, 8, 12, null, 1] se ve así:

       3
     /   \
    1     0
   / \     \
  8  12     1
Lo que necesitamos es transformar el array en un objeto donde cada nodo del árbol tiene las propiedades value, left y right.
*/

function transformTree(tree) {
  const index = arguments[1] ?? 0
  const value = tree[index]
  let base
  let result

  if (value !== null && value !== undefined) {
    base = index * 2
    result = {
      value: value,
      left: transformTree(tree, base + 1),
      right: transformTree(tree, base + 2),
    }
  }

  return result ?? null
}

console.log(transformTree([3, 1, 0, 8, 12, null, 1]))
/*
{
  value: 3,
  left: {
    value: 1,
    left: {
      value: 8,
      left: null,
      right: null
    },
    right: {
      value: 12,
      left: null,
      right: null
    }
  },
  right: {
    value: 0,
    left: null,
    right: {
      value: 1,
      left: null,
      right: null
    }
  }
}
*/
