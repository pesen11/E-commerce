const path = require("path");

const express = require("express");

const adminController = require("../controllers/admin");

const router = express.Router();

const isAuth = require("../middleware/is-auth.js");

const { check } = require("express-validator/check");

// /admin/add-product => GET
router.get("/add-product", isAuth, adminController.getAddProduct);

// /admin/products => GET
router.get("/products", isAuth, adminController.getProducts);

// /admin/add-product => POST
router.post(
  "/add-product",
  [
    check("title", "Title should be atleast 3 chars long and alphanumeric.")
      .isAlphanumeric()
      .isLength({ min: 3 }),

    check("price", "price should be int or floating").isNumeric(),
  ],
  isAuth,
  adminController.postAddProduct
);

router.get("/edit-product/:productId", isAuth, adminController.getEditProduct);

router.post(
  "/edit-product",
  [
    check("title", "Title should be atleast 3 chars long and alphanumeric.")
      .isAlphanumeric()
      .isLength({ min: 3 }),
    check("price", "price should be int or floating").isNumeric(),
  ],
  isAuth,
  adminController.postEditProduct
);

router.delete("/product/:productId", isAuth, adminController.deleteProduct);

module.exports = router;
