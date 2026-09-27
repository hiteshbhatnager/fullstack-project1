import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    userName: {
        type: string,
        require: true,
        unique: true,
    }
})

export const user = mongoose.model('user', userSchema)