const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

class BridgeController {
  startGame() {
    OutputView.printStartGameMessage();

    this.#inputBridgeSize();
  }

  #inputBridgeSize() {
    InputView.askBridgeSize(this.#validateBridgeSize.bind(this));
  }

  #validateBridgeSize(size) {
    // Validate size

    this.#onInputBridgeSize(size);
  }

  #onInputBridgeSize(size) {}
}

module.exports = BridgeController;
