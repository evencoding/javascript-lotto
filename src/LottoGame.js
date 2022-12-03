class LottoGame {
  #lottos;

  constructor(lottos) {
    this.#lottos = lottos.sort((a, b) => a - b);
  }

  getLottos() {
    return this.#lottos;
  }

  getLottosCount() {
    return this.#lottos.length;
  }
}

module.exports = LottoGame;
