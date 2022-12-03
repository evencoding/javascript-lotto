const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  askBuget(callback) {
    Console.readLine('구입금액을 입력해 주세요.\n', callback);
  },

  askWinningNumbers(callback) {
    Console.readLine('\n당첨 번호를 입력해 주세요.\n', callback);
  },
};

module.exports = InputView;
