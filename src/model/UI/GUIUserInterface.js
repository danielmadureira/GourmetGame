const dialogNode = require('dialog-node');

/**
 * Implementação de interface de usuários
 * com janelas do sistema operacional.
 */
class GUIUserInterface {

  /**
   * Construtor da classe.
   */
  constructor() {
    this.dialog = dialogNode

    this.DIALOG_RESPONSE = Object.freeze({
      OK: 'OK',
      CANCEL: 'CANCEL'
    })
  }

  /**
   * Exibe uma mensagem para o usuário.
   * 
   * @param { String } message Mensagem para o usuário.
   * 
   * @returns { Promise<void> }
   */
  alert(message) {
    return new Promise(resolve => {
      this.dialog.info(message, 'Jogo Gourmet', 0, () => {
        resolve()
      })
    })
  }

  /**
   * Cria uma pergunta com resposta
   * binária para o usuário.
   * 
   * @param { String } message Mensagem (pergunta) para o usuário.
   * 
   * @returns { Promise<Boolean> } Resposta do usuário.
   */
  confirm(message) {
    return new Promise((resolve, reject) => {
      this.dialog.question(message, 'Jogo Gourmet', 0, (code, userResponse, srdErr) => {
        if (userResponse === this.DIALOG_RESPONSE.OK) {
          resolve(true)
          return
        } else if (userResponse === this.DIALOG_RESPONSE.CANCEL) {
          resolve(false)
          return
        }

        reject(srdErr)
      })
    })
  }

  /**
   * Cria uma pergunta para o usuário.
   * 
   * @param { String } message Mensagem (pergunta) para o usuário.
   * 
   * @returns { Promise<String> } Resposta do usuário.
   */
  prompt(message) {
    return new Promise((resolve, reject) => {
      this.dialog.entry(message, 'Jogo Gourmet', 0, (code, userResponse) => {
        resolve(userResponse)
      });
    })
  }

}

module.exports = GUIUserInterface