const Validator = require('../Validator');
const InputView = require('../views/InputView');

class LottoController {
  #lotto;

  gameStart() {
    InputView.askBuget(this.bugetHandler.bind(this));
  }

  bugetHandler(buget) {
    Validator.checkBugetValidate(buget);
    console.log(buget);
  }
}

module.exports = LottoController;
