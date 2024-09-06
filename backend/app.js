import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRoutes.js";

const app = express();
dotenv.config({ path: "./config/config.env" });

const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = [
      "https://tasty-bites-5d68vwlio-bhavyas-projects-d5977b21.vercel.app",
      "https://tasty-bites-n7ip7guvh-bhavyas-projects-d5977b21.vercel.app",
    ];
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add this new GET route for testing
app.get("/api/v1/test", (req, res) => {
  res.json({
    success: true,
    message: "API is working correctly!",
    timestamp: new Date().toISOString(),
  });
});

app.use("/api/v1/reservation", reservationRouter);

dbConnection();

app.use(errorMiddleware);

export default app;
