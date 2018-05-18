import Phaser from 'phaser'
import BootScene from './scenes/Boot'

class Game extends Phaser.Game {
  constructor () {
    super({
      width: 640,
      height: 480,
      type: Phaser.CANVAS,
      parent: 'game',
      scene: BootScene,
    })
  }
}

new Game() // eslint-disable-line