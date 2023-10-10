const express = require("express");
const userVallidation = require("../../validation")
const { userController } = require("../../controller")
const validate = require("../../middlewares/validate");

const router = express.Router();

/**create user */
router.post(
    "/create-user",
    validate(userVallidation.createUser),
    userController.createUser
);

/**list user */
router.get(
    "/get-user",
    validate(userVallidation.getUser),
    userController.getUser
);

/**delete user */
router.delete(
    "/get-user/:Id",
    userController.deleteUser
);

/**update user */
router.put(
    "/get-user/:Id",
    userController.updateUser
);

/**email send */
router.post(
    "/send-mail",
    validate(userVallidation.sendMail),
    userController.sendMail
);



module.exports = router