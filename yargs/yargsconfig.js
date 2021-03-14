const argv = require('yargs')
                .option('b',
                {
                  alias: 'base',
                  type: 'number',
                  demandOption:true,
                  describe: 'toma la base de la tabla de multiplicar'
                })
                .option('l',
                {
                  alias:'listar',
                  type: 'boolean',
                  default:false,
                  describe: 'despliga la tabla de datos en console'
                })
                .option('h',
                {
                  alias:'hasta',
                  type: 'number',
                  default:false,
                  describe: 'limita la cantidad de la tabla'
                })
                .check((argv, options)=>{
                     if(isNaN(argv.b))
                     {
                         throw 'La base tiene que ser un numero';
                     }  
                     return true;
                })
                .argv;

 module.exports =  
 {
     argv
 }
