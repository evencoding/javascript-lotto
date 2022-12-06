const JudgeBot = require('../src/utils/JudgeBot');
const Lotto = require('../src/Lotto');

describe('JudgeBot 테스트', () => {
  const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
  const winningNumbers = [1, 2, 3, 4, 5, 7];
  const bonusNumber = 6;

  test('getMatchCount 테스트', () => {
    expect(
      JudgeBot.getMatchCount(lotto.getLottoNumbers(), winningNumbers)
    ).toBe(5);
  });

  test('getResult 테스트', () => {
    expect(
      JudgeBot.getResult([lotto.getLottoNumbers()], winningNumbers, bonusNumber)
    ).toEqual({
      first: 0,
      second: 1,
      third: 0,
      fourth: 0,
      fifth: 0,
    });
  });
});
