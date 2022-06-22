export default function Controls({
  buttonPlay,
  buttonPause,
  buttonSoundOnn,
  buttonSoundOff
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

  return {
    play,
    pause,
    stop,
    reset,
    soundOff,
    soundOn
  }
}