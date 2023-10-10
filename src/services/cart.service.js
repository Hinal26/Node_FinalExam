const { Cart } = require("../models")

/**
 * create Cart
 * @param {object} reqBody
 * @returns {Promise<Cart>}
 */
const createCart = async (reqBody) => {
    return Cart.create(reqBody)
};
/**list Cart */
const getCart = async (reqBody) => {
    return Cart.find(reqBody)
};

/**delete Cart */
const deleteCart = async (id) => {
    return Cart.findByIdAndDelete(id)
};

/**get Cart */
const getCartById = async (id) => {
    return Cart.findById(id)
};

/**update Cart */
const updateDetails = async (id, updateBody) => {
    return Cart.findByIdAndUpdate(id, { $set: updateBody })
};


module.exports = {
    createCart,
    getCart,
    deleteCart,
    getCartById,
    updateDetails
}