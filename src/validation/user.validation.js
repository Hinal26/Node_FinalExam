const Joi = require("joi")

/**createUser */
const createUser = {
    body: Joi.object().keys({
        user_name: Joi.string().required().trim(),
        email: Joi.string().required().trim(),
        phone: Joi.number().required(),
        password: Joi.string().required().trim(),
        address: Joi.string().required().trim(),
        country: Joi.string().required().trim(),
    })
}
/**list user */
const getUser = {
    query: Joi.object().keys({
        user_name: Joi.string().allow("").trim(),
        email: Joi.string().allow("").trim(),
        phone: Joi.number().allow(""),
        password: Joi.string().allow("").trim(),
        address: Joi.string().allow("").trim(),
        country: Joi.string().allow("").trim(),
    })
}

/** email send */
const sendMail = {
    body: Joi.object({
      email: Joi.string().required().trim().email(),
      subject: Joi.string().required().trim(),
      text: Joi.string().required().trim(),
    }),
  };

module.exports = {
    createUser,
    getUser,
    sendMail
}