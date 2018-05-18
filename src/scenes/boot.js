import Phaser from 'phaser'
import WebfontLoader from 'webfontloader'

export default class Boot extends Phaser.Scene {
  init () {
    this.fontReady = false
  }
  preload () {
    WebfontLoader.load({
      custom: {
        families: ['font1'],
        urls: ['./assets/font/font1.ttf'],
      },
      active: () => (this.fontReady = true),
    })
  }
  create () {
    if (this.fontReady) {
      this.scene.start()
    }
  }
}
