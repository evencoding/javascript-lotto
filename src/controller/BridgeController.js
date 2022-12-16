const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

class BridgeController {
  startGame() {
    OutputView.printStartGameMessage();

    this.#inputBridgeSize();
  }
}

module.exports = BridgeController;
