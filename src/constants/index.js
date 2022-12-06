const ERROR_FORM = '[ERROR] ';

const MESSAGE = Object.freeze({
  ASK_MONEY: '구입금액을 입력해주세요.\n',
  ASK_WINNING_NUMBER: '\n당첨 번호를 입력해 주세요.\n',
  ASK_BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
  error: (message) => `${ERROR_FORM} ${message}`,
  parchaseNotification: (count) => `\n${count}개를 구매했습니다.`,
  lotto: (lotto) => `[${lotto.join(', ')}]`,
  rateOfReturn: (rateOfReturn) => `총 수익률은 ${rateOfReturn}%입니다.`,
  winningStats: ({ first, second, third, fourth, fifth }) => `\n당첨 통계\n---
3개 일치 (5000원)- ${fifth}개
4개 일치 (50000원)- ${fourth}개
5개 일치 (1500000원)- ${third}개
5개 일치, 보너스 볼 일치(30000000원)- ${second}개
6개 일치 (2000000000원)- ${first}개`,
});

const ERROR_MESSAGE = Object.freeze({
  INVALID_NUMBER: '숫자를 입력해주세요.',
  INVALID_MONEY: '1000원 단위로 입력해주세요.',
  INCLUDES_BLANK: '공백은 입력할 수 없습니다.',
  INVALID_RANGE: '1부터 45까지의 숫자를 입력해주세요.',
  HAS_DUPLICATED: '중복된 숫자는 입력할 수 없습니다.',
  INVALID_LENGTH: '6자리의 숫자를 입력해주세요.',
  INVALID_BONUS_NUMBER: '당첨 번호에 포함된 번호를 입력할 수 없습니다',
});

const REGEX = Object.freeze({
  MONEY: /^\d+$/,
  BONUS_NUMBER: /^[1-9]\d*$/,
});

const PRIZE = Object.freeze({
  first: 2000000000,
  second: 30000000,
  third: 1500000,
  fourth: 50000,
  fifth: 5000,
});

const LOTTO = Object.freeze({
  PRICE: 1000,
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  MAX_COUNT: 6,
});

const GAME = Object.freeze({
  MAXINUM_DIGITS: 1,
});

module.exports = {
  MESSAGE,
  ERROR_MESSAGE,
  PRIZE,
  REGEX,
  LOTTO,
  ERROR_FORM,
  GAME,
};
