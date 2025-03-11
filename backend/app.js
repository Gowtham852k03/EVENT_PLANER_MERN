import express from "express";
import { dbconnection } from "./database/dbconnection.js";
import dotenv from "dotenv";
import cors from "cors";
import messageRouter from "./router/messageRouter.js";
const app = express();

dotenv.config({ path: "./config/config.env" });

app.use(cors({
    origin: "*", // ⚠️ Do not use in production
    methods: ["POST"],
    credentials: true,
}));



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({
        sucess: true,
        message: "Hello from backend"
    });
})
app.use("/api/v1/message", messageRouter);
dbconnection();

export default app;