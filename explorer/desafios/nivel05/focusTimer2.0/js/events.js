import {
  buttonPause,
  buttonPlay,
  buttonStop,
  buttonPlus,
  buttonLess,
  minutesDisplay,
  secondsDisplay,
  buttonTree,
  buttonRain,
  buttonCoffeShop,
  buttonFireplace,
  buttonSoundOnn,
} from "./elements.js"

export default function ({controls, timer, sound}) {
  
  buttonPlay.addEventListener('click', function(){
    controls.play()
    timer.countdown()
  })

  buttonPause.addEventListener('click', function() {
    controls.pause()
    timer.hold()
  })

  buttonStop.addEventListener('click', function() {
    controls.stop()
    timer.reset()
  })

  buttonPlus.addEventListener('click', function() {
    let newMinutes = Number(minutesDisplay.textContent) + 5

    if (newMinutes > 60) {
      alert('60 é o máximo')
    }else {
      timer.updateDisplayPlusLess(newMinutes)
      timer.updateMinutes(newMinutes)
    }
  })

  buttonLess.addEventListener('click', function() {
    let newMinutes = Number(minutesDisplay.textContent) - 5

    if (newMinutes < 0) {
      alert('0 é o mínimo')
    }else {
      timer.updateDisplayPlusLess(newMinutes)
      timer.updateMinutes(newMinutes)
    }
  })

  buttonTree.addEventListener('click', function() {
    sound.pauseSounds()
    sound.buttonTree.play()
    controls.soundOn()
  })

  buttonRain.addEventListener('click', function() {
    sound.pauseSounds()
    sound.buttonRain.play()
    controls.soundOn()
  })

  buttonCoffeShop.addEventListener('click', function() {
    sound.pauseSounds()
    sound.buttonCoffeShop.play()
    controls.soundOn()
  })

  buttonFireplace.addEventListener('click', function() {
    sound.pauseSounds()
    sound.buttonFireplace.play()
    controls.soundOn()
  })

  buttonSoundOnn.addEventListener('click', function() {
    sound.pauseSounds()
    controls.soundOff()
  })
}