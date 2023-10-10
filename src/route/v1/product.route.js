const express = require("express");
const productVallidation = require("../../validation")
const { productController } = require("../../controller")
const validate = require("../../middlewares/validate");

const router = express.Router();

/**create product */
router.post(
    "/create-product",
    validate(productVallidation.createProduct),
    productController.createProduct
);

/**list product */
router.get(
    "/get-product",
    validate(productVallidation.getProduct),
    productController.getProduct
);

/**delete product */
router.delete(
    "/get-product/:Id",
    productController.deleteProduct
);

/**update product */
router.put(
    "/get-product/:Id",
    productController.updateProduct
);

/**email send */
router.post(
    "/send-mail",
    validate(productVallidation.sendMail),
    productController.sendMail
);

module.exports = router