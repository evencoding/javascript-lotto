const { Console } = require('@woowacourse/mission-utils');

const MESSAGE = {
  ASK_BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
  ASK_DIRECTION: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  ASK_RETRY_COMMAND:
    '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
};

const InputView = {
  askBridgeSize(callback) {
    Console.readLine(MESSAGE.ASK_BRIDGE_SIZE, callback);
  },

  askDirection(callback) {
    Console.readLine(MESSAGE.ASK_DIRECTION, callback);
  },

  askRetryCommand(callback) {
    Console.readLine(MESSAGE.ASK_RETRY_COMMAND, callback);
  },
};

module.exports = InputView;
