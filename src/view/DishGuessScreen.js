const AbstractView = require('./AbstractView')

/**
 * Tela de palpite do prato.
 */
class DishGuessScreen extends AbstractView {

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
   * @param { String }
   * 
   * @returns { Boolean }
   */
  async render(dishName) {
    const text = `O prato que você pensou é ${dishName.toLowerCase()}?`

    const userResponse = await this.ui.confirm(text)

    return userResponse
  }

}

module.exports = DishGuessScreen