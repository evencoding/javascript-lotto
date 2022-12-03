const Validator = require('./Validator');

class Lotto {
  #numbers;

  constructor(numbers) {
    Validator.validateWinningNumbers(numbers);
    this.#numbers = numbers.split(',').map(Number);
    console.log(this.#numbers);
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
