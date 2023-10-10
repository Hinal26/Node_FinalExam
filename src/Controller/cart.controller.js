const {cartService} = require("../services")
/**create cart */
const createCart = async (req, res) => {
    try {
        const reqBody = req.body;
        const cart = await cartService.createCart(reqBody);
        if (!cart) {
            throw new Error("cart not found!")
        }
        res.status(200).json({
            success: true,
            message: ("cart create successfully!"),
            data: { cart }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**list cart */
const getCart = async (req, res) => {
    try {
        const reqBody = req.body;
        const cart = await cartService.get(reqCartBody);
        if (!user) {
            throw new Error("Cart not found!")
        }
        res.status(200).json({
            success: true,
            message: ("cart list successfully!"),
            data: { cart }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**delete cart */
const deleteCart = async (req, res) => {
    try {
        const id = req.params.Id;
        const cartEx = await cartService.getCart();
        if (!cartEx) {
            throw new Error("cart not found!")
        }
        const cart = await cartService.deleteCart(id)
        res.status(200).json({
            success: true,
            message: ("cart delete successfully!"),
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**update cart */
const updateCart = async (req, res) => {
    try {
        const id = req.params.Id;
        const cartEx = await cartService.getCartById(id);
        if (!cartEx) {
            throw new Error("cart not found!")
        }
        const cart = await cartService.updateDetails(id, req.body)
        res.status(200).json({
            success: true,
            message: ("cart update successfully!"),
            data: { cart }
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
    createCart,
    getCart,
    deleteCart,
    updateCart,
    sendMail
}