const BridgeController = require('./controller/BridgeController');

class App {
  #bridgeCtrl;

  constructor() {
    this.#bridgeCtrl = new BridgeController();
  }

  play() {
    this.#bridgeCtrl.startGame();
  }
}

const app = new App();
app.play();

module.exports = App;
