const InputView = require('../views/InputView');

class LottoController {
  #lotto;

  gameStart() {
    InputView.askBuget(this.bugetHandler.bind(this));
  }

  bugetHandler(buget) {
    console.log(buget);
  }
}

module.exports = LottoController;
