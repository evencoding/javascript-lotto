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

  printWinningStats(state) {
    Console.print('\n당첨 통계\n---');
    Console.print(`3개 일치 (5000원)- ${state.fifth}개
4개 일치 (50000원)- ${state.fourth}개
5개 일치 (1500000원)- ${state.third}개
5개 일치, 보너스 볼 일치(30000000원)- ${state.second}개
6개 일치 (2000000000원)- ${state.first}개`);
  },
};

module.exports = OutputView;
