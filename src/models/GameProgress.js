class Progress {
  #nextCellIndex;

  #tryCount;

  constructor() {
    this.initProgress();
    this.#tryCount = 1;
  }

  initProgress() {
    this.#nextCellIndex = 0;
    this.#tryCount += 1;
  }

  increaseNextCellIndex() {
    this.#nextCellIndex += 1;
  }

  getProgress() {
    return {
      nextCellIndex: this.#nextCellIndex,
      tryCount: this.#tryCount,
    };
  }
}

module.exports = Progress;
