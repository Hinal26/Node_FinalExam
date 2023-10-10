const { User } = require("../models")

/**
 * create User
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createUser = async (reqBody) => {
    return User.create(reqBody)
};
/**list User */
const getUser = async (reqBody) => {
    return User.find(reqBody)
};

/**delete User */
const deleteUser = async (id) => {
    return User.findByIdAndDelete(id)
};

/**get User */
const getUserById = async (id) => {
    return User.findById(id)
};

/**update User */
const updateDetails = async (id, updateBody) => {
    return User.findByIdAndUpdate(id, { $set: updateBody })
};


module.exports = {
    createUser,
    getUser,
    deleteUser,
    getUserById,
    updateDetails
}