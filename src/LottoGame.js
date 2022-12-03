class LottoGame {
  #lottos;

  constructor(lottos) {
    this.#lottos = lottos;
    console.log(this.#lottos);
  }

  getLottos() {
    return this.#lottos;
  }

  getLottosCount() {
    return this.#lottos.length;
  }
}

module.exports = LottoGame;
