const DependencyContainer = require('./src/model/DependencyContainer')
const AppController = require('./src/controller/AppController')
const CLIUserInterface = require('./src/model/UI/CLIUserInterface')

/* Bootstrapping the app. */
const store = require('./store')

const DC = new DependencyContainer()
DC.userInterface = new CLIUserInterface()
DC.store = store
/* - - - */

const app = new AppController(DC)

app.run()