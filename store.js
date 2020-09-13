const Store = require('./src/model/Store')
const Dish = require('./src/model/Dish')

const pastaDish = new Dish('Massa')
pastaDish.addDish(new Dish('Lasanha'))

const dishSet = new Set()
dishSet.add(pastaDish)
dishSet.add(new Dish('Bolo de chocolate'))

Store.addStore('dish', dishSet)

module.exports = Store