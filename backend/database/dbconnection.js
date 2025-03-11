import mongoose from "mongoose";

export const dbconnection = async () => {
    mongoose.connect(process.env.MONGO_URI, { dbName: "MERN_STACK_EVENT_PLAN" }).then(() => {
        console.log("Database connected");
    }).catch((err) => {
        console.log("some error ocurred", err);
    })
}