const Store = require('./src/model/Store')
const Dish = require('./src/model/Dish')

const pastaDish = new Dish('Massa')
pastaDish.addDish(new Dish('Lasanha'))

const dishSet = [ ]
dishSet.push(pastaDish)
dishSet.push(new Dish('Bolo de chocolate'))

Store.addStore('dish', dishSet)

module.exports = Store