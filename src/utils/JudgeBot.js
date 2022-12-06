const JudgeBot = {
  results: {
    first: 0,
    second: 0,
    third: 0,
    fourth: 0,
    fifth: 0,
  },

  getResult(lottos, winningNumbers, bonusNumber) {
    lottos.forEach((lotto) => {
      const matchCount = this.getMatchCount(lotto, winningNumbers);
      const isMatchBonus = lotto.includes(bonusNumber);

      this.updateResults(matchCount, isMatchBonus);
    });

    return this.results;
  },

  getMatchCount(lotto, winningNumbers) {
    return lotto.filter((number) => winningNumbers.includes(number)).length;
  },

  updateResults(matchCount, isMatchBonus) {
    if (matchCount === 6) this.results.first += 1;
    else if (matchCount === 5 && isMatchBonus) this.results.second += 1;
    else if (matchCount === 5) this.results.third += 1;
    else if (matchCount === 4) this.results.fourth += 1;
    else if (matchCount === 3) this.results.fifth += 1;
  },
};

module.exports = JudgeBot;
