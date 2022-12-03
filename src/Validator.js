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

  throwErrorIfIncludesBlank(numbers) {
    if (numbers.includes(' ')) {
      this.throwError('입력에 공백을 포함할 수 없습니다.');
    }
  },
};

module.exports = Validator;
