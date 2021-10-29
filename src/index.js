const app = require('./app')

//llamamos el objeto que contiene funcion de puerto ,(invocamos la variable)
app.listen(app.get('port'));
console.log('Server on port', app.get('port'));

