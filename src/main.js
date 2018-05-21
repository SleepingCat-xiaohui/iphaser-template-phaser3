import Phaser from 'phaser'
import BootScene from './scenes/boot'

class Game extends Phaser.Game {
  constructor () {
    super({
      width: 600,
      height: 400,
      type: Phaser.CANVAS,
      parent: 'game',
    })

    this.scene.add('BootScene', BootScene, true)
  }
}

new Game() // eslint-disable-line