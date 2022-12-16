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
};

module.exports = OutputView;
