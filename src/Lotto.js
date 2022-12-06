const Validator = require('./utils/Validator');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  getErrorMessage() {
    const message = Validator.getErrorMessageIfInValidNumbers(this.#numbers);

    return message;
  }

  getLottoNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
