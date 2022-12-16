const { Console } = require('@woowacourse/mission-utils');

const MESSAGE = {
  START_GAME: '다리 건너기 게임을 시작합니다.\n',
};

const OutputView = {
  printStartGameMessage() {
    Console.print(MESSAGE.START_GAME);
  },
};

module.exports = OutputView;
