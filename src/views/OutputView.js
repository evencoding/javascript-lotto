const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printErrorMessage(message) {
    Console.print(`[ERROR] ${message}`);
  },

  printParchaseNotification(count) {
    Console.print(`\n${count}개를 구매했습니다.`);
  },

  printLottos(lottos) {
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.join(', ')}]`);
    });
  },
};

module.exports = OutputView;
