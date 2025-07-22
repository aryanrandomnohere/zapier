import express from "express";
import { zapRouter } from "./router/zapRouter.js";
import { userRouter } from "./router/userRouter.js";
import cors from "cors";
import actionRouter from "./router/actionRouter.js";
import triggerRouter from "./router/triggerRouter.js";
import cookieParser from "cookie-parser";
import { AuthMiddleware } from "./Middleware/AuthMiddleware.js";
const PORT = 3001;
const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/zap", zapRouter);
app.use("/api/v1", userRouter);
app.use("/api/v1/actions", actionRouter);
app.use("/api/v1/triggers", triggerRouter);

app.listen(PORT, () => {
  console.log("Server is listening on port: ", PORT);
});
