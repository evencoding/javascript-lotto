const InputView = require('../views/InputView');

class LottoController {
  gameStart() {
    this.#inputBudget();
  }

  #inputBudget() {
    InputView.askBudget(this.#validateBudget.bind(this));
  }

  #validateBudget(budget) {}
}

module.exports = LottoController;
