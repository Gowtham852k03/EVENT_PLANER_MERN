import express from "express";
import { dbconnection } from "./database/dbconnection.js";
import dotenv from "dotenv";
import cors from "cors";
import messageRouter from "./router/messageRouter.js";

const app = express();
dotenv.config({ path: "./config/config.env" });

// Correct CORS Setup
app.use(cors({
    origin: process.env.FRONTEND_URL, // Make sure this URL matches exactly
    methods: ["POST", "GET"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"]
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Hello from backend"
    });
});
app.use("/api/v1/message", messageRouter);

// Connect to Database
dbconnection();

export default app;
