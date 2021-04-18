// import names from './data_file.js';
const sayHi = require('./function_file')
const names = require('./data_file')
// console.log(names)

sayHi('Priyanka')
console.log(names)
sayHi(names.name1)