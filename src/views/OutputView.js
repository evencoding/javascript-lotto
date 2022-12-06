const { Console } = require('@woowacourse/mission-utils');

const { MESSAGE } = require('../constants');

const OutputView = {
  printErrorMessage(message) {
    Console.print(MESSAGE.error(message));
  },

  printParchaseNotification(count) {
    Console.print(MESSAGE.parchaseNotification(count));
  },

  printLottos(lottos) {
    lottos.forEach((lotto) => {
      Console.print(MESSAGE.lotto(lotto));
    });
  },

  printWinningStats(state) {
    Console.print(MESSAGE.winningStats(state));
  },

  printRateOfReturn(rateOfReturn) {
    Console.print(MESSAGE.rateOfReturn(rateOfReturn));
  },
};

module.exports = OutputView;
