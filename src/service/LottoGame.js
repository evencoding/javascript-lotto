const { Random } = require('@woowacourse/mission-utils');

const Lotto = require('../Lotto');

const Validator = require('../utils/Validator');
const JudgeBot = require('../utils/JudgeBot');

const { PRIZE, LOTTO, GAME } = require('../constants');

class LottoGame {
  #lotto;
  #bonusNumber;
  #lottos;

  generateLottos(count) {
    this.#lottos = Array.from({ length: count }).map(() =>
      Random.pickUniqueNumbersInRange(
        LOTTO.MIN_NUMBER,
        LOTTO.MAX_NUMBER,
        LOTTO.MAX_COUNT
      ).sort((a, b) => a - b)
    );
    return this.#lottos;
  }

  handleWinningNumbers(numbers) {
    this.#lotto = new Lotto(numbers.split(',').map(Number));
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
      const [key, value] = cur;
      return acc + value * PRIZE[key];
    }, 0);

    return ((totalPrize / (this.#lottos.length * 1000)) * 100).toLocaleString(
      'ko-KR',
      {
        maximumFractionDigits: GAME.MAXINUM_DIGITS,
      }
    );
  }
}

module.exports = LottoGame;
