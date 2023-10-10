const Joi = require("joi")

/**createProduct */
const createProduct = {
    body: Joi.object().keys({
        product_name: Joi.string().required().trim(),
        product_dec: Joi.string().required().trim(),
        product_id: Joi.number().required(),
        product_menu: Joi.string().required().trim(),
        price: Joi.number().required(),
    })
}
/**list product */
const getProduct = {
    query: Joi.object().keys({
        product_name: Joi.string().allow("").trim(),
        product_dec: Joi.string().allow("").trim(),
        product_id: Joi.number().allow(""),
        product_menu: Joi.string().allow("").trim(),
        price: Joi.number().allow(""),
    })
}

/** email send */
const sendMail = {
    body: Joi.object({
      email: Joi.string().required().trim().email(),
      subject: Joi.string().required().trim(),
      text: Joi.string().required().trim()
    }),
  };

module.exports = {
    createProduct,
    getProduct,
    sendMail
}