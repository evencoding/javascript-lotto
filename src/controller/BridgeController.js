const BridgeGame = require('../service/BridgeGame');

const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

class BridgeController {
  #bridgeGame;

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

  #onInputBridgeSize(size) {
    this.#bridgeGame = new BridgeGame(size);

    this.#inputDirection();
  }

  #inputDirection() {
    InputView.askDirection(this.#validateDirection.bind(this));
  }

  #validateDirection(direction) {
    // Validate direction

    this.#onInputDirection(direction);
  }

  #onInputDirection(direction) {
    this.#bridgeGame.move(direction);
  }
}

module.exports = BridgeController;
