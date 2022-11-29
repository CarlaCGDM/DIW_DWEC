const fsPromises = require("fs").promises
const path = require("path")


const operacionesConFicheros = async (nuevosDatos) => {

    try{
      //Tenemos que decirle que se espere a que los datos se lean para continuar con la ejecución de este "subhilo"
      const datos = await fsPromises.readFile(
        path.join(__dirname, "archivos", "ficheroAEscribir.txt"),
        "utf8"
      );

      //Tenemos que decirle que se espere
      await fsPromises.appendFile(
        path.join(__dirname, "archivos", "ficheroAEscribir.txt"),
        datos + `\n\n${nuevosDatos}`
      );
    }catch(err){
        process.exit(1)
    }
}

exports.escribirFichero = operacionesConFicheros;



//Asincronia MAL
/*
fs.readFile(path.join(__dirname, "archivos", "ficheroALeer.txt"), "utf8", (err, data) => {
    if(err){
        console.log(`Ha habido un error: ${err}`)
    } else {
        console.log(data)
        fs.writeFile(
          path.join(__dirname, "archivos", "ficheroALeer.txt"),
          "Nuevos datos escritos",
          (err) => {
            if (err) {
              console.log(`Ha habido un error escribiendo: ${err}`);
            } else {
              console.log("Escritura Completada");
              fs.rename(
                path.join(__dirname, "archivos", "ficheroALeer.txt"),
                path.join(__dirname, "archivos", "nuevoNombre.txt"),
                (err) => {
                    if(err){
                        console.log("Error")
                    }
                }
              );
            }
          }
        );
    }
})
*/





