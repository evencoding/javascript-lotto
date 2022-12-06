const LottoGame = require('../service/LottoGame');

const Validator = require('../Validator');

const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

class LottoController {
  #lottoGame;

  constructor() {
    this.#lottoGame = new LottoGame();
  }

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

    this.#buyLottos(budget / 1000);
  }

  #buyLottos(count) {
    const lottos = this.#lottoGame.generateLottos(count);
  }
}

module.exports = LottoController;
