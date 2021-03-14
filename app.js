
const {crearArchivo} = require('./helpers/multiplicar.js');
const {argv} =  require('./yargs/yargsconfig.js');
const colors = require('colors');


//tarea
//('l')
//listar
//boolean
//valor por defecto default:false

// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');

// console.log(base);
// console.log('base: yargs', argv.base);


// impriman la tabla del 5 en la consola
crearArchivo(argv.b, argv.l, argv.h)
.then(nombrearchivo => console.log(nombrearchivo.random, 'creado'))
.catch(error => console.log(error));

