const Lotto = require('../Lotto');
const LottoGame = require('../LottoGame');
const LottoGenerator = require('../LottoGenerator');
const Validator = require('../Validator');
const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

class LottoController {
  #lotto;
  #lottoGame;

  gameStart() {
    InputView.askBuget(this.bugetHandler.bind(this));
  }

  bugetHandler(buget) {
    Validator.checkBugetValidate(buget);

    this.buyLotto(buget / 1000);
  }

  buyLotto(count) {
    const lottos = LottoGenerator.generate(count);
    this.#lottoGame = new LottoGame(lottos);

    this.printLottos();
  }

  printLottos() {
    OutputView.parchaseNotice(this.#lottoGame.getLottosCount());
    OutputView.lottos(this.#lottoGame.getLottos());

    InputView.askWinningNumbers(this.winningNumbersHandler.bind(this));
  }

  winningNumbersHandler(winningNumbers) {
    this.#lotto = new Lotto(winningNumbers);

    InputView.askBonusNumber(this.bonusNumberHandler.bind(this));
  }

  bonusNumberHandler(number) {
    Validator.validateBonusNumber({
      number,
      winningNumbers: this.#lotto.getLotto(),
    });
  }
}

module.exports = LottoController;
