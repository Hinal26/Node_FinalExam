const { Order } = require("../models")

/**
 * create Order
 * @param {object} reqBody
 * @returns {Promise<Order>}
 */
const createOrder = async (reqBody) => {
    return Order.create(reqBody)
};
/**list order */
const getOrder = async (reqBody) => {
    return Order.find(reqBody)
};

/**delete order */
const deleteOrder = async (id) => {
    return Order.findByIdAndDelete(id)
};

/**get order */
const getOrderById = async (id) => {
    return Order.findById(id)
};

/**update order */
const updateDetails = async (id, updateBody) => {
    return Order.findByIdAndUpdate(id, { $set: updateBody })
};


module.exports = {
    createOrder,
    getOrder,
    deleteOrder,
    getOrderById,
    updateDetails
}