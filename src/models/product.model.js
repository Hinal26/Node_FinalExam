const mongoose = require("mongoose")

const productSchema = new mongoose.Schema(
    {
        product_name: {
            type: String,
            trim: true
        },
        product_dec: {
            type: String,
            trim: true
        },
        product_id: {
            type: Number,
            default: 0,
        },
        product_menu: {
            type: String,
            trim: true,
        },
        price: {
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

const product = mongoose.model("product", productSchema);
module.exports = product;