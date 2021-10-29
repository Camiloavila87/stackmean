//guardamos la funcion en una constante llamada hello
//const hello = (req, res) => res.send('hello mi perro');

//creacion de funciones varias funciones

const employesCtrl = {}
//funcion para obtener varios empleados
employesCtrl.getEmployees = (req, res) => {
    res.send('get employess')
}
//funcion para crear empleado
employesCtrl.createEmployee = (req, res) => {
    res.send('create employess')
}
//funcion para obtener un empleado
employesCtrl.getEmployee = (req, res) => {}
//funcion para editar un empleado
employesCtrl.editEmployee = (req, res) => {}
//funcion para eliminar un empleado
employesCtrl.deleteEmployee = (req, res) => {}

//expoatamos employeCrtl que es un objeto que contiene varias funciones
module.exports = employesCtrl;