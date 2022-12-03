class LottoGame {
  #lottos;

  constructor(lottos) {
    this.#lottos = lottos.sort((a, b) => a - b);
  }
}

module.exports = LottoGame;
