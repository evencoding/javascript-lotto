const { Random } = require('@woowacourse/mission-utils');

const Lotto = require('../Lotto');

const Validator = require('../utils/Validator');
const JudgeBot = require('../utils/JudgeBot');

const PRIZE = require('../constants');

class LottoGame {
  #lotto;
  #bonusNumber;
  #lottos;

  constructor() {
    this.#lotto = new Lotto();
  }

  generateLottos(count) {
    this.#lottos = Array.from({ length: count }).map(() =>
      Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b)
    );

    return this.#lottos;
  }

  handleWinningNumbers(numbers) {
    this.#lotto = new Lotto(numbers.split(',').map(Number));

    return this.#lotto.getErrorMessage();
  }

  validateBonusNumber(number) {
    this.#bonusNumber = Number(number);
    const errorMessage = Validator.getErrorMessageIfInValidBonus(
      number,
      this.#lotto.getLottoNumbers()
    );

    return errorMessage;
  }

  getWinningState() {
    const state = JudgeBot.getResult(
      this.#lottos,
      this.#lotto.getLottoNumbers(),
      this.#bonusNumber
    );

    return state;
  }

  getRateOfReturn(winningState) {
    const totalPrize = Object.entries(winningState).reduce((acc, cur) => {
      const key = cur[0];
      const value = cur[1];

      return acc + value * PRIZE[key];
    }, 0);

    return (totalPrize / (this.#lottos.length * 10)).toFixed(1);
  }
}

module.exports = LottoGame;
