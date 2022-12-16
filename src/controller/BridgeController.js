const { Console } = require('@woowacourse/mission-utils');

const BridgeGame = require('../service/BridgeGame');

const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

class BridgeController {
  #bridgeGame;

  commandHandler = {
    R: this.#retryGame.bind(this),
    Q: this.#printGameResult.bind(this, false),
  };

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
    const { isCorrectDirection, bridgeMap } = this.#bridgeGame.move(direction);
    OutputView.printBridgeMap(bridgeMap);

    if (!isCorrectDirection) {
      return this.#inputRetryCommand();
    }

    this.#checkClear();
  }

  #inputRetryCommand() {
    InputView.askRetryCommand(this.#validateRetryCommand.bind(this));
  }

  #validateRetryCommand(command) {
    // Validate retry command

    this.commandHandler[command]();
  }

  #checkClear() {
    const isCleared = this.#bridgeGame.getGameStatus();
    if (!isCleared) {
      return this.#inputDirection();
    }

    this.#printGameResult();
  }

  #retryGame() {
    this.#bridgeGame.retry();

    this.#inputDirection();
  }

  #printGameResult(isClear = true) {
    const { bridgeMap, tryCount } = this.#bridgeGame.getGameResult();
    OutputView.printGameResult(bridgeMap, isClear, tryCount);

    this.#exitGame();
  }

  #exitGame() {
    Console.close();
  }
}

module.exports = BridgeController;
