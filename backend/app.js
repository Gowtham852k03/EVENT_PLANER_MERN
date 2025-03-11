import express from "express";
import { dbconnection } from "./database/dbconnection.js";
import dotenv from "dotenv";
import cors from "cors";
import messageRouter from "./router/messageRouter.js";

const app = express();
dotenv.config({ path: "./config/config.env" });

// Correct CORS Setup
app.use(cors({
    origin: process.env.FRONTEND_URL, // Ensure no trailing slash
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Add OPTIONS
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"]
}));

// Handle preflight requests explicitly
app.options("*", cors());


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
