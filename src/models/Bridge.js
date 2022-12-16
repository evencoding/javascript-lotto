class Bridge {
  #bridge;

  #map;

  constructor(bridge) {
    this.#bridge = bridge;
    this.initMap();
  }

  initMap() {
    this.#map = {
      U: [],
      D: [],
    };
  }

  getMovingLog(nextCellIndex, direction) {
    const isCorrectDirection = this.#bridge[nextCellIndex] === direction;
    this.#drawMap(isCorrectDirection, direction);

    return { isCorrectDirection, bridgeMap: this.getMap() };
  }

  #drawMap(isCorrectDirection, direction) {
    const otherDirection = this.#getOtherDirection(direction);
    if (isCorrectDirection) {
      this.#map[direction].push('O');
      this.#map[otherDirection].push(' ');
    } else {
      this.#map[direction].push('X');
      this.#map[otherDirection].push(' ');
    }
  }

  #getOtherDirection(direction) {
    return direction === 'U' ? 'D' : 'U';
  }

  getMap() {
    return this.#map;
  }

  getBridgeSize() {
    return this.#bridge.length;
  }
}

module.exports = Bridge;
