const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  askBudget(callback) {
    Console.readLine('구입금액을 입력해주세요.\n', callback);
  },
};

module.exports = InputView;
