const productosService = require("../services/productosService");
/*
CONTROLADOR
En el controlador se implementa la lógica de la aplicación.
Desde el controlador, se llaman a los diferentes servicios que realizarán la interacción
con la Base de Datos.
En el controlador simplemente "se reparte el juego".
*/
const getAllProducts = (req, res, next) => {
  const allProducts = productosService.getAllProducts();
  res.send(allProducts).end();
  console.log("\x1b[34m%s\x1b[0m", `[GET /productos] - OK`);
};

/*
  Ejercicio para la clase, implementa la funcionalidad que debe tener "getOneProduct"
  Realiza la división entre "controlador" "servicio" "modelo"
*/
const getOneProduct = (req, res) => {
  let nombreProducto = req.params.prod;
  const producto = productosService.getOneProduct(nombreProducto);
  res.send(producto).end();
  console.log("\x1b[34m%s\x1b[0m", `[GET /productos/${nombreProducto}] - OK`);
};

//En esta funcion se define el método post de un producto
//SOLO se implementa la logica de la aplicacion, es decir, simplemente
//valida que existen datos en el cuerpo de la petición y que
//si se inserta, manda una página con el producto insertado
//y si no, envía el código de estado correspondiente y una página de error
const postOneProduct = (req, res) => {
  const { body } = req;

  if (!body.nombre || !body.precio) {
    res.status(400).send("<h1>Datos incompletos</h1>").end();
    console.log(
      "\x1b[34m%s\x1b[0m",
      `[POST /productos/] - NOT OK`
    );
  } else {
    const newProduct = {
      nombre: body.nombre,
      precio: body.precio,
    };

    const createdProduct = productosService.createOneProduct(newProduct);

    if (createdProduct) {
      res.send(createdProduct).end();
      console.log(
        "\x1b[34m%s\x1b[0m",
        `[POST /productos/] - OK`
      );
    } else {
      res.status(409).send("<h1>Entrada duplicada</h1>").end();
      console.log(
        "\x1b[34m%s\x1b[0m",
        `[POST /productos/] - NOT OK`
      );
    }
  }
};

const putOneProduct = (req, res) => {
  let nombreProducto = req.params.prod;
  res.send(`<h1>PUT ${nombreProducto}</h1>`).end();
  console.log("\x1b[34m%s\x1b[0m", `[PUT /productos/${nombreProducto}] - OK`);
};

const deleteOneProduct = (req, res) => {
  let nombreProducto = req.params.prod;
  res.send(`<h1>DELETE ${nombreProducto}</h1>`).end();
  console.log(
    "\x1b[34m%s\x1b[0m",
    `[DELETE /productos/${nombreProducto}] - OK`
  );
};

module.exports.getAllProducts = getAllProducts;
module.exports.getOneProduct = getOneProduct;
module.exports.postOneProduct = postOneProduct;
module.exports.putOneProduct = putOneProduct;
module.exports.deleteOneProduct = deleteOneProduct;
