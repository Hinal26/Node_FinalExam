const express = require("express");
const orderVallidation = require("../../validation")
const { orderController } = require("../../controller")
const validate = require("../../middlewares/validate");

const router = express.Router();

/**create order */
router.post(
    "/create-order",
    validate(orderVallidation.createOrder),
    orderController.createOrder
);

/**list order */
router.get(
    "/get-order",
    validate(orderVallidation.getOrder),
    orderController.getOrder
);

/**delete order */
router.delete(
    "/get-order/:Id",
    orderController.deleteOrder
);

/**update order */
router.put(
    "/get-order/:Id",
    orderController.updateOrder
);

/**email send */
router.post(
    "/send-mail",
    validate(orderVallidation.sendMail),
    orderController.sendMail
);



module.exports = router