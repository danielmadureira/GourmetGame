const AbstractView = require('./AbstractView')

/**
 * Tela inicial do app.
 */
class WelcomeScreen extends AbstractView {

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
   * @returns { Boolean }
   */
  async render() {
    return await this.ui.confirm("Pense em um prato que gosta.")
  }

}

module.exports = WelcomeScreen