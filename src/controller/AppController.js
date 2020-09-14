const WelcomeScreen = require("../view/WelcomeScreen")
const DishGuessScreen = require("../view/DishGuessScreen")
const SuccessScreen = require("../view/SuccessScreen")
const CreateDishScreen = require("../view/CreateDishScreen")
const CreateDishCategoryScreen = require("../view/CreateDishCategoryScreen")
const Dish = require("../model/Dish")

/**
 * Controlador da aplicação.
 */
class AppController {

  /**
   * Construtor do controlador da aplicação.
   * 
   * @param { DependencyContainer } config 
   */
  constructor(DC) {
    this.DC = DC
    this.successCount = 0
  }

  /**
   * Executa a aplicação.
   */
  async run() {
    await this.indexPage()

    const dishes = this.DC.store.getStore('dish')

    const [ hasGuessedDish, dishSet ] = await this.guessDish(dishes)

    if (hasGuessedDish) {
      await this.showSuccess()

    } else {
      await this.createNewDish(dishSet)
    }

    this.run()
  }

  /**
   * Carrega a página inicial da aplicação.
   */
  async indexPage() {
    const view = new WelcomeScreen(this.DC.userInterface)
    await view.render()
  }

  /**
   * Carrega a tela para tentar adivinhar
   * o prato do usuário.
   * 
   * @param { Array } dishSet 
   * 
   * @returns { Array }
   */
  async guessDish(dishSet) {
    const view = new DishGuessScreen(this.DC.userInterface)

    let dish
    for await (dish of dishSet) {
      const userResponse = await view.render(dish.name)

      if (userResponse) {
        if (dish.hasDishes()) {
          return await this.guessDish(dish.dishes)
        }

        return [ true, null ]
      }
    }

    return [ false, dishSet ]
  }

  /**
   * Carrega a tela para exibir a mensagem
   * de sucesso.
   */
  async showSuccess() {
    ++ this.successCount

    const view = new SuccessScreen(this.DC.userInterface)

    await view.render(this.successCount > 1)
  }

  /**
   * Carrega as telas para cadastrar um novo prato.
   * 
   * @param { Array } dishSet 
   */
  async createNewDish(dishSet) {
    const newDishName = await this._enterNewDish()

    // First item in the set.
    const lastItemInSet = dishSet[dishSet.length - 1]

    const newDishCatName = await this._enterNewDishCat(newDishName, lastItemInSet.name)

    const dishCat = new Dish(newDishCatName)
    dishCat.addDish(new Dish(newDishName))

    dishSet.unshift(dishCat)
  }

  /**
   * Carrega a tela para buscar o nome do prato
   * que o usuário está pensando.
   * 
   * @returns { String }
   */
  async _enterNewDish() {
    const createDish = new CreateDishScreen(this.DC.userInterface)
    let newDishName = ''
    do {
      newDishName = await createDish.render()
    } while (newDishName === '')

    return newDishName    
  }

  /**
   * Carrega tela para buscar o nome do prato
   * ao qual o prato que o usuário está pensando
   * pertence.
   * 
   * @param { String } newDishName Nome do prato que o usuário está pensando.
   * @param { String } lastItemInSet Nome do prato do último palpite da aplicação.
   * 
   * @returns { String }
   */
  async _enterNewDishCat(newDishName, lastItemInSet) {
    const createDishCat = new CreateDishCategoryScreen(this.DC.userInterface)
    let newDishCatName = ''

    do {
      newDishCatName = await createDishCat.render(newDishName, lastItemInSet)
    } while (newDishCatName === '')
    
    return newDishCatName
  }

}

module.exports = AppController