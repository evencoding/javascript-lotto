const LottoController = require('./controller/LottoController');

class App {
  #lottoCtrl;

  constructor() {
    this.#lottoCtrl = new LottoController();
  }

  play() {
    this.#lottoCtrl.gameStart();
  }
}

module.exports = App;
