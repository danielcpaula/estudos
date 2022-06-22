export default function() {
  const buttonTree = new Audio("https://github.com/danielcpaula/explorer/blob/main/desafios/nivel05/focusTimer2.0/sounds/Floresta.wav?raw=true")
  const buttonRain = new Audio("https://github.com/danielcpaula/explorer/blob/main/desafios/nivel05/focusTimer2.0/sounds/Chuva.wav?raw=true")
  const buttonCoffeShop = new Audio("https://github.com/danielcpaula/explorer/blob/main/desafios/nivel05/focusTimer2.0/sounds/Cafeteria.wav?raw=true")
  const buttonFireplace = new Audio("https://github.com/danielcpaula/explorer/blob/main/desafios/nivel05/focusTimer2.0/sounds/Lareira.wav?raw=true")

  buttonTree.loop = true
  buttonRain.loop = true
  buttonCoffeShop.loop = true
  buttonFireplace.loop = true

  function pauseSounds() {
    buttonTree.pause()
    buttonRain.pause()
    buttonCoffeShop.pause()
    buttonFireplace.pause()
  }

  return {
    buttonTree,
    buttonRain,
    buttonCoffeShop,
    buttonFireplace,
    pauseSounds,
  }
}