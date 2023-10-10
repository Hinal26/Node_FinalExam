const express = require("express");
const cartVallidation = require("../../validation")
const { cartController } = require("../../controller")
const validate = require("../../middlewares/validate");

const router = express.Router();

/**create cart */
router.post(
    "/create-cart",
    validate(cartVallidation.createCart),
    cartController.createCart
);

/**list cart */
router.get(
    "/get-cart",
    validate(cartVallidation.getCart),
    cartController.getCart
);

/**delete cart */
router.delete(
    "/get-cart/:Id",
    cartController.deleteCart
);

/**update cart */
router.put(
    "/get-cart/:Id",
    cartController.updateCart
);

/**email send */
router.post(
    "/send-mail",
    validate(cartVallidation.sendMail),
    cartController.sendMail
);

module.exports = router