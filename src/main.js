import Phaser from 'phaser'
import BootScene from './scenes/boot'
import GameScene from './scenes/game'

class Game extends Phaser.Game {
  constructor () {
    super({
      width: 640,
      height: 480,
      type: Phaser.CANVAS,
      parent: 'game',
      backgroundColor: '#cccccc',
    })

    this.scene.add('BootScene', BootScene, true)
    this.scene.add('GameScene', GameScene)
  }
}

new Game() // eslint-disable-line