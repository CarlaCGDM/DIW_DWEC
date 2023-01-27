const express = require("express");
const router = express.Router();

// localhost:3001/ o localhost:3001/api/v1/
router.get("/", (req, res, next)=>{
    res.send("GET ALL PRODUCTOS")
})

router.post("/", (req, res, next) => {
  res.send("POST ONE PRODUCT");
});

router.get("/:prod", (req, res, next) => {
  res.send("GET ONE PRODUCT");
});

router.put("/", (req, res, next) => {
  res.send("UPDATE ONE PRODUCT");
});


module.exports.router = router;