const { Console } = require('@woowacourse/mission-utils');

const MESSAGE = {
  ASK_BRIDGE_SIZE: '다리의 길이를 입력해주세요.',
};

const InputView = {
  askBridgeSize(callback) {
    Console.readLine(MESSAGE.ASK_BRIDGE_SIZE, callback);
  },
};

module.exports = InputView;
