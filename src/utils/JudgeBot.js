const JudgeBot = {
  results: {
    first: 0,
    second: 0,
    third: 0,
    fourth: 0,
    fifth: 0,
  },

  getRanks(lottos, winningNumbers, bonusNumber) {
    lottos.forEach((lotto) => {
      const matchCount = this.getMatchCount(lotto, winningNumbers);
      const isMatchBonus = lotto.includes(bonusNumber);

      if (matchCount === 6) this.results.first += 1;
      if (matchCount === 5 && isMatchBonus) this.results.second += 1;
      if (matchCount === 5 && !isMatchBonus) this.results.third += 1;
      if (matchCount === 4) this.results.fourth += 1;
      if (matchCount === 3) this.results.fifth += 1;
    });

    return this.results;
  },

  getMatchCount(lotto, winningNumbers) {
    return lotto.filter((number) => winningNumbers.includes(number)).length;
  },
};

module.exports = JudgeBot;
