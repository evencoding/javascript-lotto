const LottoGame = require('../service/LottoGame');

const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

const Validator = require('../Validator');

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

    this.#printParchaseNotification(count);
    this.#printLottos(lottos);
  }

  #printParchaseNotification(count) {
    OutputView.printParchaseNotification(count);
  }

  #printLottos(lottos) {
    OutputView.printLottos(lottos);

    this.#inputWinningNumbers();
  }

  #inputWinningNumbers() {
    InputView.askWinningNumbers(this.#handleWinningNumbers.bind(this));
  }

  #handleWinningNumbers(winningNumbers) {
    console.log(winningNumbers);
  }
}

module.exports = LottoController;
