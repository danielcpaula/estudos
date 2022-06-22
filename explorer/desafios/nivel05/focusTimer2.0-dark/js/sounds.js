import {
  controlVolumeTree,
  controlVolumeRain,
  controlVolumeCoffeShop,
  controlVolumeFirePlace
} from "./elements.js"

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

  function setVolumeTree() {
    let maxVolume = controlVolumeTree.value / 100
    buttonTree.volume = maxVolume 
  }

  function setVolumeRain() {
    let maxVolume = controlVolumeRain.value / 100
    buttonRain.volume = maxVolume 
  }
  
  function setVolumeCoffeShop() {
    let maxVolume = controlVolumeCoffeShop.value / 100
    buttonCoffeShop.volume = maxVolume 
  }

  function setVolumeFireplace() {
    let maxVolume = controlVolumeFirePlace.value / 100
    buttonFireplace.volume = maxVolume 
  }

  return {
    buttonTree,
    buttonRain,
    buttonCoffeShop,
    buttonFireplace,
    pauseSounds,
    setVolumeTree,
    setVolumeRain,
    setVolumeCoffeShop,
    setVolumeFireplace
  }
}