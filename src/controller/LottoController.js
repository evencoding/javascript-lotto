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
    const errorMessage = Validator.getErrorMessageIfInValidBudget(budget);
    if (errorMessage) this.#handleError(errorMessage);

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
    const errorMessage = this.#lottoGame.handleWinningNumbers(winningNumbers);
    if (errorMessage) this.#handleError(errorMessage);

    this.#inputBonusNumber();
  }

  #inputBonusNumber() {
    InputView.askBonusNumber(this.#handleBonusNumber.bind(this));
  }

  #handleBonusNumber(bonusNumber) {
    const errrorMessage = this.#lottoGame.validateBonusNumber(bonusNumber);
    if (errrorMessage) this.#handleError(errrorMessage);

    this.#printWinningStats();
  }

  #printWinningStats() {
    const ranks = this.#lottoGame.getRanks();
  }

  #handleError(errorMessage) {
    OutputView.printErrorMessage(errorMessage);
    throw new Error('[ERROR]');
  }
}

module.exports = LottoController;
