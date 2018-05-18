import Phaser from 'phaser'
import WebfontLoader from 'webfontloader'

export default class Boot extends Phaser.Scene {
  init () {
    this.fontReady = false
  }
  preload () {
    console.log('preload')
    WebfontLoader.load({
      custom: {
        families: ['Font1'],
      },
      active: () => {
        this.fontReady = true
      },
    })
  }
  update () {
    console.log('update')
    // if (this.fontReady) {
    //   this.scene.start('GameScene')
    // }
  }
}
