const Progress = require('../models/GameProgress');
const Bridge = require('../models/Bridge');

const { makeBridge } = require('../BridgeMaker');
const { generate } = require('../utils/BridgeRandomNumberGenerator');

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

  getGameResult() {
    const bridgeMap = this.#bridge.getMap();
    const { tryCount } = this.#progress.getProgress();

    return { bridgeMap, tryCount };
  }
}

module.exports = BridgeGame;
