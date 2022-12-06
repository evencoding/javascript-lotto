const { Random } = require('@woowacourse/mission-utils');

const LottoGame = require('../src/service/LottoGame');

const mockRandom = (numbers) => {
  Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, cur) => {
    Random.pickUniqueNumbersInRange.mockReturnValueOnce(
      cur.sort((a, b) => a - b)
    );

    return acc;
  }, Random.pickUniqueNumbersInRange);
};

describe('LottoGame 테스트', () => {
  const lottoGame = new LottoGame();

  test('랜덤한 숫자 6개를 오름차순 정렬 후 반환 테스트', () => {
    mockRandom([
      [6, 5, 4, 3, 2, 1],
      [12, 8, 9, 10, 11, 7],
    ]);
    const lottos = lottoGame.generateLottos(2);
    expect(lottos).toEqual([
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
    ]);
  });

  //   test('getRateOfReturn 테스트', () => {
  //     const lottoGame = new LottoGame();
  //     lottoGame.generateLottos(8);
  //     const winningState = {
  //       first: 0,
  //       second: 0,
  //       third: 0,
  //       fourth: 0,
  //       fifth: 1,
  //     };
  //     expect(lottoGame.getRateOfReturn(winningState)).toBe('62.5');
  //   });
});
