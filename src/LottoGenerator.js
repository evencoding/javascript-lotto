const { Random } = require('@woowacourse/mission-utils');

const LottoGenerator = {
  generate(count) {
    const lottos = Array.from({ length: count }, () => {
      const lotto = Random.pickUniqueNumbersInRange(1, 45, 6);

      return lotto;
    });

    return lottos;
  },
};

module.exports = LottoGenerator;
