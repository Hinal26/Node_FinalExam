const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema(
    {
        order_name: {
            type: String,
            trim: true
        },
        order_dec: {
            type: String,
            trim: true
        },
        order_id: {
            type: Number,
            default: 0,
        },
        order_price: {
            type: Number,
            trim: true,
        },
        is_active: {
            type: Boolean,
            default: true
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const order = mongoose.model("order", orderSchema);
module.exports = order;