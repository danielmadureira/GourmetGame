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
    await this.ui.alert("Pense em um prato que gosta.")
  }

}

module.exports = WelcomeScreen