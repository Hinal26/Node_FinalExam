const Joi = require("joi")

/**createCart*/
const createCart = {
    body: Joi.object().keys({
        order_name: Joi.string().required().trim(),
        cart_dec: Joi.string().required().trim(),
        order_id: Joi.number().required(),
        order_price: Joi.string().required().trim(),
    })
}
/**list cart */
const getCart = {
    query: Joi.object().keys({
        order_name: Joi.string().allow("").trim(),
        cart_dec: Joi.string().allow("").trim(),
        order_id: Joi.number().allow(""),
        order_price: Joi.string().allow("").trim(),
    })
}

/** email cart */
const sendMail = {
    body: Joi.object({
      email: Joi.string().required().trim().email(),
      subject: Joi.string().required().trim(),
      text: Joi.string().required().trim(),
    }),
  };

module.exports = {
    createCart,
    getCart,
    sendMail
}