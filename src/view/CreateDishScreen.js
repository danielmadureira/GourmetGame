const AbstractView = require('./AbstractView')

/**
 * Tela de criação de um novo prato.
 */
class CreateDishScreen extends AbstractView {

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
   */
  async render() {
    return await this.ui.prompt('Qual prato você pensou?')
  }

}

module.exports = CreateDishScreen