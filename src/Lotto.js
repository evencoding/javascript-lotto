const { Console } = require('@woowacourse/mission-utils');
const Validator = require('./utils/Validator');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.#validator(numbers);
  }

  #validator() {
    const message = Validator.getErrorMessageIfInValidNumbers(this.#numbers);
    if (message) {
      Console.print(`[ERROR] ${message}`);
      throw new Error(`[ERROR]`);
    }
  }

  getLottoNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
