import express from "express";
import cors from "cors";
import rateLimiter from "./middleware/rateLimiter.js";
import healthRoutes from "./routes/health.js";
import auditRoutes from "./routes/auditRoutes.js";
import loggerMiddleware from "./middleware/loggerMiddleware.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(rateLimiter);
app.use(loggerMiddleware);

app.use("/api", healthRoutes);
app.use("/api", auditRoutes);


export default app;
