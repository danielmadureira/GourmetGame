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
    await this._getInput(message, '(Pressione enter)')
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
    let userResponse
    let loop = true
    do {
       userResponse = await this._getInput(message, '(s/n)> ')

       if (userResponse === 's' || userResponse === 'n') {
        loop = false
       }
    } while (loop)

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
    return await this._getInput(message)
  }

  /**
   * Faz uma pergunta ao usuário.
   * 
   * @param { String } message Texto para exibir para o usuário.
   * @param { String } promptSign Texto que aparece antes do cursor.
   * 
   * @returns { Promise<string> }
   */
  _getInput(message, promptSign = "> ") {
    console.log(message)
    this.RL.setPrompt(promptSign)
    this.RL.prompt()

    return new Promise(resolve => {
      this.RL.once('line', resolve)
    })
  }

}

module.exports = CLIUserInterface