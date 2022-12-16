const Progress = require('../models/GameProgress');

const { makeBridge } = require('../BridgeMaker');
const { generate } = require('../utils/BridgeRandomNumberGenerator');
const Bridge = require('../models/Bridge');

class BridgeGame {
  #bridge;

  #progress;

  constructor(size) {
    const bridge = makeBridge(size, generate);
    this.#bridge = new Bridge(bridge);
    this.#progress = new Progress();
  }

  move(direction) {
    const { nextCellIndex } = this.#progress.getProgress();
    const { isCorrectDirection, bridgeMap } = this.#bridge.getMovingLog(
      nextCellIndex,
      direction
    );
    this.#progress.increaseNextCellIndex();

    return { isCorrectDirection, bridgeMap };
  }

  retry() {
    this.#progress.initProgress();
    this.#bridge.initMap();
  }

  getGameStatus() {
    const bridgeSize = this.#bridge.getBridgeSize();
    const { nextCellIndex } = this.#progress.getProgress();

    return bridgeSize === nextCellIndex;
  }

  getGameResult() {}
}

module.exports = BridgeGame;
