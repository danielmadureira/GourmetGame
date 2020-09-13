const DependencyContainer = require('./src/model/DependencyContainer')
const AppController = require('./src/controller/AppController')
const GUIUserInterface = require('./src/model/UI/GUIUserInterface')

/* Bootstrapping the app. */
const store = require('./store')

const DC = new DependencyContainer()
DC.userInterface = new GUIUserInterface()
DC.store = store
/* - - - */

const app = new AppController(DC)

app.run()