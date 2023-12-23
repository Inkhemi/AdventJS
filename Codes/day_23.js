/*
¡Santa 🎅 está organizando una gran cena navideña 🫓 y quiere asegurarse de que todos los platos sean únicos y variados!

Te da una lista de platos navideños donde cada elemento consiste en una lista de strings que comienza con el nombre del plato,
 seguido de todos los ingredientes utilizados para su preparación.

Tienes que escribir una función que agrupe los platos por ingredientes siempre que haya al menos 2 platos que los contengan.

Así que devolvemos un array de arrays donde la primera posición es el nombre del ingrediente y el resto los nombres de los platos.

Tanto la lista de ingredientes como los platos deben estar ordenados alfabéticamente.
*/

function organizeChristmasDinner(dishes) {
  const recipes = []

  const ingredients = dishes.reduce((acc, dish) => {
    dish.forEach((ingredient) => {
      if (acc[ingredient]) {
        acc[ingredient].push(dish[0])
      } else {
        acc[ingredient] = [dish[0]]
      }
    })
    return acc
  }, {})

  for (const ingredient in ingredients) {
    if (ingredients[ingredient].length > 1) {
      recipes.push([ingredient, ...ingredients[ingredient].sort()])
    }
  }

  recipes.sort((a, b) => {
    if (a[0] < b[0]) return -1
    if (a[0] > b[0]) return 1

    return 0
  })

  return recipes
}

const dishes = [
  ["christmas turkey", "turkey", "sauce", "herbs"],
  ["cake", "flour", "sugar", "egg"],
  ["hot chocolate", "chocolate", "milk", "sugar"],
  ["pizza", "sauce", "tomato", "cheese", "ham"],
]

console.log(organizeChristmasDinner(dishes))

/*
  
  "sauce" está en 2 platos: "christmas turkey" y "pizza".
  "sugar" está en 2 platos: "cake" y "hot chocolate".
  El resto de ingredientes solo aparecen en un plato, por lo que no los mostramos.
  
  Enseñamos primero "sauce" porque alfabéticamente está antes que "sugar".
  Y los platos de cada ingrediente también están ordenados alfabéticamente.
  
  [
    ["sauce", "christmas turkey", "pizza"],
    ["sugar", "cake", "hot chocolate"]
  ]
  */
