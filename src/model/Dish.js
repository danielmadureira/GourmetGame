/**
 * Classe para pratos.
 */
class Dish {

  /**
   * Construtor da classe de
   * pratos.
   * 
   * @param { String } name 
   */
  constructor(name) {
    this.name = name
    this.dishes = [ ]
  }

  /**
   * Adiciona um novo prato ao prato.
   * 
   * @param { Dish } dish
   */
  addDish(dish) {
    this.dishes.push(dish)
  }

  /**
   * Diz se o prato inclui outros pratos.
   * 
   * @returns { Boolean }
   */
  hasDishes() {
    return (this.dishes.length > 0)
  }

}

module.exports = Dish