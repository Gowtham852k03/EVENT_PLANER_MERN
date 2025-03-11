import mongoose from "mongoose";
import validator from "validator";
const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true,"Name is required"],
        minLength: [3,"Name must be at least 3 characters"],
        maxLength: [50,"Name must be less than 50 characters"]
    },
    email: {
        type: String,
        required:[true,"Email is required"],
        validate: [validator.isEmail,"Please enter a valid email"],
    },
    subject: {
        type: String,
        required:[true,"Subject is required"],
        minLength: [5,"Subject must be at least 5 characters"],
        maxLength: [50,"Subject must be less than 50 characters"]
    },
    message: {
        type: String,
        required:[true,"Message is required"],
        minLength: [10,"Message must be at least 10 characters"],
        maxLength: [500,"Message must be less than 500 characters"]
    }
});
export const Message = mongoose.model("Message", messageSchema);