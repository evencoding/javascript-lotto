const Validator = {
  getErrorMessageIfInValidBudget(budget) {
    const regex = /^[1-9]\d+$/;
    if (!regex.test(budget)) return '숫자만 입력해주세요.';
    if (budget.includes(' ')) return '공백은 입력할 수 없습니다.';
    if (budget % 1000 !== 0) return '1000원 단위로 입력해주세요.';

    return '';
  },

  getErrorMessageIfInValidNumbers(numbers) {
    for (number of numbers) {
      if (number < 1 || number > 45) return '1~45의 숫자를 입력해주세요.';
      if (Number.isNaN(number)) return '숫자만 입력해주세요.';
      if (numbers.indexOf(number) !== numbers.lastIndexOf(number)) {
        return '중복된 숫자는 입력할 수 없습니다.';
      }
    }
    return '';
  },

  getErrorMessageIfInValidBonus(bonusNumber, winningNumbers) {
    const regex = /^[1-9]\d*$/;
    if (!regex.test(bonusNumber)) return '숫자만 입력해주세요.';
    if (bonusNumber < 1 || bonusNumber > 45) {
      return '1~45의 숫자를 입력해주세요.';
    }
    if (winningNumbers.includes(Number(bonusNumber))) {
      return '당첨 번호에 포함된 번호를 입력할 수 없습니다';
    }

    return '';
  },
};

module.exports = Validator;
