const { Random } = require('@woowacourse/mission-utils');
const Lotto = require('../Lotto');
const Validator = require('../Validator');

class LottoGame {
  #lotto;
  #bonusNumber;
  #lottos;

  constructor() {
    this.#lotto = new Lotto();
  }

  generateLottos(count) {
    return Array.from({ length: count }).map(() =>
      Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b)
    );
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
}

module.exports = LottoGame;
