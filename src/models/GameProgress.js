class Progress {
  #nextCellIndex;

  #tryCount;

  constructor() {
    this.initProgress();
  }

  initProgress() {
    this.#nextCellIndex = 0;
    this.#tryCount = 0;
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

  increaseTryCount() {
    this.#tryCount += 1;
  }
}

module.exports = Progress;
