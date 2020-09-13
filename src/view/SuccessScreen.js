const AbstractView = require('./AbstractView')

/**
 * Tela de sucesso.
 */
class SuccessScreen extends AbstractView {

  /**
   * Construtor da view.
   * 
   * @param { UI } UIImplementation
   */
  constructor(UIImplementation) {
    super(UIImplementation)
  }

  /**
   * Renderiza a view.
   * 
   * @param { Boolean } isAgain
   */
  async render(isAgain) {
    let text = `Acertei${isAgain ? ' de novo!' : '!'}`

    await this.ui.alert(text)
  }

}

module.exports = SuccessScreen