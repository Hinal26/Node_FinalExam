const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
        user_name: {
            type: String,
            trim: true
        },
        email: {
            type: String,
            trim: true
        },
        phone: {
            type: Number,
            default: 0,
        },
        password: {
            type: String,
            trim: true,
        },
        address: {
            type: String,
            trim: true,
        },
        country: {
            type: String,
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

const user = mongoose.model("user", userSchema);
module.exports = user;