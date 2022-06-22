import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import Events from "./events.js"
import {
  buttonPause,
  buttonPlay,
  buttonStop,
  minutesDisplay,
  secondsDisplay,
  buttonSoundOnn,
  buttonSoundOff,
  buttonLightMode,
  buttonDarkMode,
  body,
  leftArea,
  rightArea,
  footer,
} from "./elements.js"

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonStop,
  buttonSoundOnn,
  buttonSoundOff,
  buttonLightMode,
  buttonDarkMode,
  body,
  leftArea,
  rightArea,
  footer,
})

const timer = Timer({
  minutesDisplay, 
  secondsDisplay, 
  resetControls: controls.reset
})

const sound = Sound()

Events({controls, timer, sound})