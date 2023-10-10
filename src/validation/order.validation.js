const Joi = require("joi")

/**createOrder*/
const createOrder = {
    body: Joi.object().keys({
        order_name: Joi.string().required().trim(),
        order_dec: Joi.string().required().trim(),
        order_id: Joi.number().required(),
        order_price: Joi.string().required().trim(),
    })
}
/**list order */
const getOrder = {
    query: Joi.object().keys({
        order_name: Joi.string().allow("").trim(),
        order_dec: Joi.string().allow("").trim(),
        order_id: Joi.number().allow(""),
        order_price: Joi.string().allow("").trim(),
    })
}

/** email order */
const sendMail = {
    body: Joi.object({
      email: Joi.string().required().trim().email(),
      subject: Joi.string().required().trim(),
      text: Joi.string().required().trim(),
    }),
  };

module.exports = {
    createOrder,
    getOrder,
    sendMail
}