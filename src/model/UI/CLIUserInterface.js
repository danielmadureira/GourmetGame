const readlineModule = require('readline')

/**
 * Implementação de interface de usuários
 * na linha de comando
 */
class CLIUserInterface {

  /**
   * Construtor da classe.
   */
  constructor() {
    this.RL = readlineModule.createInterface(process.stdin, process.stdout)
  }

  /**
   * Exibe uma mensagem para o usuário.
   * 
   * @param { String } message Mensagem para o usuário.
   * 
   * @returns { Promise<void> }
   */
  async alert(message) {
    this._input(message)

    await this._getInput()
  }

  /**
   * Cria uma pergunta com resposta
   * binária para o usuário.
   * 
   * @param { String } message Mensagem (pergunta) para o usuário.
   * 
   * @returns { Promise<Boolean> } Resposta do usuário.
   */
  async confirm(message) {
    this._input(message, '(s/*)> ')

    let userResponse = await this._getInput()

    return (userResponse.toLowerCase() === "s")
  }

  /**
   * Cria uma pergunta para o usuário.
   * 
   * @param { String } message Mensagem (pergunta) para o usuário.
   * 
   * @returns { Promise<String> } Resposta do usuário.
   */
  async prompt(message) {
    this._input(message)

    return await this._getInput()
  }

  /**
   * Faz uma pergunta ao usuário.
   * 
   * @param { String } message Texto para exibir para o usuário.
   * @param { String } promptText Texto que aparece antes do cursor.
   */
  _input(message, promptText = "> ") {
    console.log(message)
    this.RL.setPrompt(promptText)
    this.RL.prompt()
  }

  /**
   * Retorna o texto digitado pelo usuário.
   * 
   * @returns { String }
   */
  async _getInput() {
    for await (let line of this.RL) {
      return line
    }
  }

}

module.exports = CLIUserInterface