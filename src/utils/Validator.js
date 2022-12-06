const { REGEX, ERROR_MESSAGE, LOTTO } = require('../constants');

const Validator = {
  getErrorMessageIfInValidBudget(budget) {
    if (!REGEX.MONEY.test(budget)) return ERROR_MESSAGE.INVALID_NUMBER;
    if (budget.includes(' ')) return ERROR_MESSAGE.INCLUDES_BLANK;
    if (budget % LOTTO.PRICE !== 0) return ERROR_MESSAGE.INVALID_MONEY;

    return '';
  },

  getErrorMessageIfInValidNumbers(numbers) {
    if (numbers.length !== 6) return ERROR_MESSAGE.INVALID_LENGTH;
    if (new Set(numbers).size < 6) return ERROR_MESSAGE.HAS_DUPLICATED;

    for (number of numbers) {
      if (Number.isNaN(number)) return ERROR_MESSAGE.INVALID_NUMBER;
      if (number < 1 || number > 45) return ERROR_MESSAGE.INVALID_RANGE;
    }

    return '';
  },

  getErrorMessageIfInValidBonus(bonusNumber, winningNumbers) {
    if (!REGEX.BONUS_NUMBER.test(bonusNumber)) {
      return ERROR_MESSAGE.INVALID_NUMBER;
    }
    if (bonusNumber < 1 || bonusNumber > 45) {
      return ERROR_MESSAGE.INVALID_RANGE;
    }
    if (winningNumbers.includes(Number(bonusNumber))) {
      return ERROR_MESSAGE.INVALID_BONUS_NUMBER;
    }

    return '';
  },
};

module.exports = Validator;
