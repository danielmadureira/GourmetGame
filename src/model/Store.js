/**
 * Implementação de persistência de
 * dados na memória.
 * 
 * @info Não deve ser instanciado!
 */

/**
 * Dados da store.
 * 
 * @var { Map }
 */
_store = new Map()

/**
 * Cria uma nova store.
 * 
 * @param { String } name 
 * @param { any } value 
 */
function addStore(name, value) {
  _store.set(name, value)
}

/**
 * Retorna o valor de uma store.
 * 
 * @param { String } name 
 * 
 * @returns { any }
 */
function getStore(name) {
  return _store.get(name)
}

const Store = {
  addStore,
  getStore
}

module.exports = Store