const Validator = {
  throwError(message) {
    throw new Error(`[ERROR] ${message}`);
  },

  checkBugetValidate(buget) {
    const regex = /^[1-9]\d+$/;
    this.throwErrorIfIncludesBlank(buget);
    if (!regex.test(buget)) {
      this.throwError('0으로 시작하지 않는 양의 정수를 입력해주세요.');
    }
    if (buget % 1000 !== 0) {
      this.throwError('1000원 단위로 입력해주세요.');
    }
  },

  validateWinningNumbers(numbers) {
    const regex = /^([1-9]\d?,){5}[1-9]\d?$/;
    this.throwErrorIfIncludesBlank(numbers);
    if (!regex.test(numbers)) {
      this.throwError(
        '0으로 시작하지 않는 6개의 숫자를 ,로 구분해 입력해주세요.'
      );
    }
    if (new Set(numbers.split(',')).size !== 6) {
      this.throwError('중복되지 않는 숫자 6개를 입력해주세요.');
    }
    numbers.split(',').forEach((number) => {
      if (number < 1 || number > 45) {
        this.throwError('1과 45 사이의 숫자를 입력해주세요.');
      }
    });
  },

  validateBonusNumber({ number, winningNumbers }) {
    this.throwErrorIfIncludesBlank(number);
    if (number[0] === '0') {
      this.throwError('0으로 시작하지 않는 양의 정수를 입력해주세요.');
    }
    if (number < 1 || number > 45) {
      this.throwError('1과 45 사이의 숫자를 입력해주세요.');
    }
    if (winningNumbers.includes(Number(number))) {
      this.throwError('보너스 번호는 당첨 번호와 중복될 수 없습니다.');
    }
  },

  throwErrorIfIncludesBlank(numbers) {
    if (numbers.includes(' ')) {
      this.throwError('입력에 공백을 포함할 수 없습니다.');
    }
  },
};

module.exports = Validator;
