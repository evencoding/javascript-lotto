const Validator = require('./Validator');

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

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
