import { Howl } from "howler"

const playAudio = (audioFile) => {
  const sound = new Howl({src: [audioFile]})
  sound.play();
}

export default playAudio;