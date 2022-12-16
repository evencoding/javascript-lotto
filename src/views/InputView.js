const { Console } = require('@woowacourse/mission-utils');

const MESSAGE = {
  ASK_BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
  ASK_DIRECTION: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
};

const InputView = {
  askBridgeSize(callback) {
    Console.readLine(MESSAGE.ASK_BRIDGE_SIZE, callback);
  },

  askDirection(callback) {
    Console.readLine(MESSAGE.ASK_DIRECTION, callback);
  },
};

module.exports = InputView;
