const {orderService} = require("../services")
/**create order */
const createOrder = async (req, res) => {
    try {
        const reqBody = req.body;
        const order = await orderService.createOrder(reqBody);
        if (!order) {
            throw new Error("order not found!")
        }
        res.status(200).json({
            success: true,
            message: ("order create successfully!"),
            data: { order }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**list order */
const getOrder = async (req, res) => {
    try {
        const reqBody = req.body;
        const order = await orderService.getOrder(reqBody);
        if (!order) {
            throw new Error("order not found!")
        }
        res.status(200).json({
            success: true,
            message: ("order list successfully!"),
            data: { order }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**delete order */
const deleteOrder = async (req, res) => {
    try {
        const id = req.params.Id;
        const orderEx = await orderService.getOrder();
        if (!orderEx) {
            throw new Error("order not found!")
        }
        const order = await orderService.deleteOrder(id)
        res.status(200).json({
            success: true,
            message: ("order delete successfully!"),
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**update order */
const updateOrder = async (req, res) => {
    try {
        const id = req.params.Id;
        const orderEx = await orderService.getOrderById(id);
        if (!orderEx) {
            throw new Error("order not found!")
        }
        const order = await orderService.updateDetails(id, req.body)
        res.status(200).json({
            success: true,
            message: ("order update successfully!"),
            data: { order }
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
    createOrder,
    getOrder,
    deleteOrder,
    updateOrder,
    sendMail
}