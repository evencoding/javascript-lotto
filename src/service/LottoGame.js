const { Random } = require('@woowacourse/mission-utils');

class LottoGame {
  #lottos;

  generateLottos(count) {
    return Array.from({ length: count }).map(() =>
      Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b)
    );
  }
}

module.exports = LottoGame;
