const getAllProducts = (req, res, next) => {
  res.send("GET ALL PRODUCTOS");
};

const createOneProduct = (req, res, next) => {
  res.send("POST ONE PRODUCT");
};

const getOneProduct = (req, res, next) => {
  res.send("GET ONE PRODUCT");
};

const updateOneProduct = (req, res, next) => {
  res.send("UPDATE ONE PRODUCT");
};

const deleteOneProduct = (req, res, next) => {
  res.send("DELETE ONE PRODUCT");
};

module.exports = {
  getAllProducts,
  createOneProduct,
  getOneProduct,
  updateOneProduct,
  deleteOneProduct,
};
