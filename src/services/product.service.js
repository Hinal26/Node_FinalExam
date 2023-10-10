const { Product } = require("../models")

/**
 * create Product
 * @param {object} reqBody
 * @returns {Promise<Product>}
 */
const createProduct = async (reqBody) => {
    return Product.create(reqBody)
};
/**list Product */
const getProduct = async (reqBody) => {
    return Product.find(reqBody)
};

/**delete Product */
const deleteProduct = async (id) => {
    return Product.findByIdAndDelete(id)
};

/**get product */
const getProductById = async (id) => {
    return Product.findById(id)
};

/**update product */
const updateDetails = async (id, updateBody) => {
    return Product.findByIdAndUpdate(id, { $set: updateBody })
};


module.exports = {
    createProduct,
    getProduct,
    deleteProduct,
    getProductById,
    updateDetails
}