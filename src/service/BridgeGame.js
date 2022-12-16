const { makeBridge } = require('../BridgeMaker');
const { generate } = require('../utils/BridgeRandomNumberGenerator');

class BridgeGame {
  #bridge;

  constructor(size) {
    this.#bridge = makeBridge(size, generate);
  }

  move() {}

  retry() {}
}

module.exports = BridgeGame;
