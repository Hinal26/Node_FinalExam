const {userService} = require("../services")
/**create user */
const createUser = async (req, res) => {
    try {
        const reqBody = req.body;
        const user = await userService.createUser(reqBody);
        if (!user) {
            throw new Error("user not found!")
        }
        res.status(200).json({
            success: true,
            message: ("user create successfully!"),
            data: { user }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**list user */
const getUser = async (req, res) => {
    try {
        const reqBody = req.body;
        const user = await userService.getUser(reqBody);
        if (!user) {
            throw new Error("user not found!")
        }
        res.status(200).json({
            success: true,
            message: ("user list successfully!"),
            data: { user }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**delete user */
const deleteUser = async (req, res) => {
    try {
        const id = req.params.Id;
        const userEx = await userService.getUser();
        if (!userEx) {
            throw new Error("user not found!")
        }
        const user = await userService.deleteUser(id)
        res.status(200).json({
            success: true,
            message: ("user delete successfully!"),
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**update user */
const updateUser = async (req, res) => {
    try {
        const id = req.params.Id;
        const userEx = await userService.getUserById(id);
        if (!userEx) {
            throw new Error("user not found!")
        }
        const user = await userService.updateDetails(id, req.body)
        res.status(200).json({
            success: true,
            message: ("user update successfully!"),
            data: { user }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}
/**send email */
const sendMail = async (req, res) => {
    try {
        const reqBody = req.body;
        const sendEmail = await emailService.sendMail(
            reqBody.email,
            reqBody.subject,
            reqBody.text
        );
        if (!sendEmail) {
            throw new Error("Something went wrong, please try again or later.");
        }
        res
            .status(200)
            .json({ success: true, message: "Email send successfully!" });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};
module.exports = {
    createUser,
    getUser,
    deleteUser,
    updateUser,
    sendMail
}