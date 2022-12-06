const { Console } = require('@woowacourse/mission-utils');

const LottoGame = require('../service/LottoGame');

const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

const Validator = require('../utils/Validator');
const { LOTTO, ERROR_FORM } = require('../constants');

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

    this.#buyLottos(budget / LOTTO.PRICE);
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
    this.#lottoGame.handleWinningNumbers(winningNumbers);

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
    const winningState = this.#lottoGame.getWinningState();

    OutputView.printWinningStats(winningState);

    this.#printRateOfReturn(winningState);
  }

  #printRateOfReturn(winningState) {
    const rateOfReturn = this.#lottoGame.getRateOfReturn(winningState);

    OutputView.printRateOfReturn(rateOfReturn);

    this.#gameExit();
  }

  #gameExit() {
    Console.close();
  }

  #handleError(errorMessage) {
    OutputView.printErrorMessage(errorMessage);
    throw new Error(ERROR_FORM);
  }
}

module.exports = LottoController;
