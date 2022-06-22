export default function Controls({
  buttonPlay,
  buttonPause,
  buttonSoundOnn,
  buttonSoundOff,
  buttonLightMode,
  buttonDarkMode,
  body,
  leftArea,
  rightArea,
  footer,
}) {
  function play(){
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
  }

  function pause() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
  }

  function stop() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
  }

  function reset() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
  }

  function soundOn() {
    buttonSoundOnn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
  }

  function soundOff() {
    buttonSoundOnn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
  }

  function darkMode(){
    buttonDarkMode.classList.remove('hide')
    buttonLightMode.classList.add('hide')
    body.classList.add('dark-mode')
    leftArea.classList.add('dark-mode')
    rightArea.classList.add('dark-mode')
    footer.classList.add('dark-mode')
  }

  function lightMode(){
    buttonDarkMode.classList.add('hide')
    buttonLightMode.classList.remove('hide')
    body.classList.remove('dark-mode')
    leftArea.classList.remove('dark-mode')
    rightArea.classList.remove('dark-mode')
    footer.classList.remove('dark-mode')
  }

  return {
    play,
    pause,
    stop,
    reset,
    soundOff,
    soundOn,
    darkMode,
    lightMode,
  }
}