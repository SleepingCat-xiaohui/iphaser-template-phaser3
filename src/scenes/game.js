import Phaser from 'phaser'

export default class extends Phaser.Scene {
  create () {
    console.log('game create')

    this.add.text(200, 100, 'Case shrugged.\nThe girl to his right giggled and nudged him.', { color: '#00ff00', align: 'left' })
    this.add.text(200, 200, 'Case shrugged.\nThe girl to his right giggled and nudged him.', { color: '#00ff00', align: 'right' })
    this.add.text(200, 300, 'Case shrugged.\nThe girl to his right giggled and nudged him.', { color: '#00ff00', align: 'center' })
  }
}
