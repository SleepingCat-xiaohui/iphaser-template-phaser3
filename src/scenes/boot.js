import Phaser from 'phaser'

export default class Boot extends Phaser.Scene {
  preload () {
    this.load.spritesheet('pet', './assets/test.png', {
      frameWidth: 34,
      frameHeight: 68,
    })
  }

  create () {
    this.anims.create({
      key: 'jump',
      frames: this.anims.generateFrameNames('pet'),
      repeat: -1,
      frameRate: 10,
    })

    this.add.sprite(300, 160, 'pet').play('jump')

    this.add.text(300, 200, `Hello World`, {
      fontFamily: 'Courier',
      fontSize: '20px',
      color: '#fff000',
    }).setOrigin(0.5)
  }
}
