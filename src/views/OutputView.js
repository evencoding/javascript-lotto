const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printErrorMessage(message) {
    Console.print(`[ERROR] ${message}`);
  },
};

module.exports = OutputView;
