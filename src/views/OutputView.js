const { Console } = require('@woowacourse/mission-utils');

const MESSAGE = {
  START_GAME: '다리 건너기 게임을 시작합니다.\n',
};

const OutputView = {
  printStartGameMessage() {
    Console.print(MESSAGE.START_GAME);
  },

  printBridgeMap(bridgeMap) {
    const maps = Object.values(bridgeMap);
    maps.forEach((map) => {
      Console.print(`[ ${map.join(' | ')} ]`);
    });
  },

  printGameResult(bridgeMap, isClear, tryCount) {
    Console.print('\n최종 게임 결과');
    this.printBridgeMap(bridgeMap);

    Console.print(`\n게임 성공 여부: ${isClear ? '성공' : '실패'}`);
    Console.print(`총 시도한 횟수: ${tryCount}`);
  },
};

module.exports = OutputView;
