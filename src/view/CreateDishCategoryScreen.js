const AbstractView = require('./AbstractView')

/**
 * Tela de criação de um novo prato.
 */
class CreateDishCategoryScreen extends AbstractView {

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
   * @param { String } newDishName
   * @param { String } similarDishName
   */
  async render(newDishName, similarDishName) {
    newDishName = this._formatNewDishNameString(newDishName)
    similarDishName = similarDishName.toLowerCase()

    const text = `${newDishName} é ______ mas ${similarDishName} não.`

    return await this.ui.prompt(text)
  }

  /**
   * Retorna a string do nome do prato formatada.
   * 
   * @param { String } newDishName 
   * 
   * @returns { String }
   */
  _formatNewDishNameString(newDishName) {
    return newDishName.charAt(0).toUpperCase()
      + newDishName.substr(1)
  }

}

module.exports = CreateDishCategoryScreen