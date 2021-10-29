const express = require('express')
const morgan = require('morgan')

const app = express()
//configuramos un objeto llamado app para el puerto por el que vamos a escuchar(definimos la variable)
app.set('port', process.env.PORT || 3002);
app.use(morgan('dev'))
//llamamos el archivo en la ruta
app.use("/api/employes",require('./routes/employes.rutes'))

module.exports = app;