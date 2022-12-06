const Validator = {
  getErrorMessageIfInValidBudget(budget) {
    const regex = /^[1-9]\d+$/;
    if (!regex.test(budget)) return '숫자만 입력해주세요.';
    if (budget.includes(' ')) return '공백은 입력할 수 없습니다.';
    if (budget % 1000 !== 0) return '1000원 단위로 입력해주세요.';

    return '';
  },
};

module.exports = Validator;
