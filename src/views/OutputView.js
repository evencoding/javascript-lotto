const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  parchaseNotice(count) {
    Console.print(`\n${count}개를 구매했습니다.`);
  },

  lottos(lottos) {
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.join(', ')}]`);
    });
  },
};

module.exports = OutputView;
