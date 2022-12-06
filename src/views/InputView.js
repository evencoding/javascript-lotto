const { Console } = require('@woowacourse/mission-utils');

const { MESSAGE } = require('../constants');

const InputView = {
  askBudget(callback) {
    Console.readLine(MESSAGE.ASK_MONEY, callback);
  },

  askWinningNumbers(callback) {
    Console.readLine(MESSAGE.ASK_WINNING_NUMBER, callback);
  },

  askBonusNumber(callback) {
    Console.readLine(MESSAGE.ASK_BONUS_NUMBER, callback);
  },
};

module.exports = InputView;
