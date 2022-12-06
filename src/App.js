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

const app = new App();
app.play();

module.exports = App;
