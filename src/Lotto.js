const Validator = require('./Validator');

class Lotto {
  #numbers;

  constructor(numbers) {
    Validator.validateWinningNumbers(numbers);
    this.#numbers = numbers.split(',').map(Number);
  }

  getLotto() {
    return this.#numbers;
  }
}

module.exports = Lotto;
