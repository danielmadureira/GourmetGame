/**
 * Classe abstrata de views.
 */
class AbstractView {

  /**
   * Construtor da view.
   * 
   * @param { UI } UIImplementation
   */
  constructor(UIImplementation) {
    if (new.target === AbstractView) {
      throw new Error('Cannot construct abstract class.')
    }

    this.ui = UIImplementation
  }

  /**
   * Renderiza a view.
   * 
   * @abstract
   */
  render() {
    throw new Error('Cannot invoke abstract method.')
  }

}

module.exports = AbstractView