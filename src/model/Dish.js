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
    this.dishes = new Set()
  }

  /**
   * Adiciona um novo prato ao prato.
   * 
   * @param { Dish } dish
   */
  addDish(dish) {
    this.dishes.add(dish)
  }

  /**
   * Diz se o prato inclui outros pratos.
   * 
   * @returns { Boolean }
   */
  hasDishes() {
    return (this.dishes.size > 0)
  }

}

module.exports = Dish