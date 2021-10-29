//esto es un objeto llamada errutador que permite guardar rutas
const{ Router } = require('express')
//se ejecuta como una funcion y devuelve un objeto
const router = Router()

const employesCtrl = require('../controlers/employes.controles.js')
//creamos una url la cual cuando la llama, se envia una respuesta en este caso hola mi perro.se pueden necesitar varias rutas para el CRUD
router.get('/', employesCtrl.getEmployees)
router.post('/', employesCtrl.createEmployee)
router.get('/:id', employesCtrl.getEmployee)
router.put('/:id', employesCtrl.editEmployee)
router.delete('/:id', employesCtrl.deleteEmployee)

//exportamos el objeto
module.exports = router