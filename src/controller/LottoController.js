const LottoGame = require('../LottoGame');
const LottoGenerator = require('../LottoGenerator');
const Validator = require('../Validator');
const InputView = require('../views/InputView');

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
  }
}

module.exports = LottoController;
