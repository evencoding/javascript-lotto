const Validator = require('../Validator');

const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

class LottoController {
  gameStart() {
    this.#inputBudget();
  }

  #inputBudget() {
    InputView.askBudget(this.#validateBudget.bind(this));
  }

  #validateBudget(budget) {
    const message = Validator.getErrorMessageIfInValidBudget(budget);
    if (message) {
      OutputView.printErrorMessage(message);
      throw new Error('[ERROR]');
    }
  }
}

module.exports = LottoController;
