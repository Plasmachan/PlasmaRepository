const fs = require('fs');
const colors = require('colors');
const crearArchivo = async (numero, enlistar, hasta)=> 
{
    // return new Promise((resolve,reject)=>
    // {
    //     let salida = '';
        
    //     for(let i = 1; i <=10; i++)
    //     {
    //         salida += `
    //         ${numero} * ${i}\n`;
    //     } 
    //     fs.writeFileSync(`tabla-${numero}.txt`, salida);

    //     resolve(`tabla-${numero}.txt`);   
    //     reject('No se pudo crear el archivo');
    // });

    try 
    {
        let salida = '';
        let consola = '';
        
        
        for(let i = 1; i <=hasta; i++)
        {
            // salida += colors.random(`${numero} * ${i}\n`);
            
             salida += `${numero} * ${i} = ${numero * i} \n`;
             consola += `${numero} ${'x'.green} ${i} = ${numero * i}\n`;
        } 
        
        if(enlistar)
        {
            console.log(consola);
            await fs.writeFileSync(`./salida/tabla-${numero}.txt`, salida);
            return(`tabla-${numero}.txt`);
        }
        await fs.writeFileSync(`./salida/tabla-${numero}.txt`, salida);
        return(`tabla-${numero}.txt`);

    } catch (error) {
        console.log(error);
    }
}



module.exports = {
    crearArchivo
}