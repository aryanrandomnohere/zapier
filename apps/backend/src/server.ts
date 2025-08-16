import express from "express";
import { zapRouter } from "./router/zapRouter.js";
import { userRouter } from "./router/userRouter.js";
import cors from "cors";
import actionRouter from "./router/actionRouter.js";
import triggerRouter from "./router/triggerRouter.js";
import cookieParser from "cookie-parser";
import authMiddleware from "./Middleware/authMiddleware.js";
import zapRunRouter from "./router/zapRunRouter.js";
import errorMiddleware from "./Middleware/errorMIddleware.js";
import { authRouter } from "./router/authRouter.js";
import { folderRouter } from "./router/folderRoutes.js";
import openRouter from "./router/openRouter.js";

const PORT = 3001;
const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/zap", authMiddleware, zapRouter);
app.use("/api/v1", userRouter);
app.use("/api/v1/actions", authMiddleware, actionRouter);
app.use("/api/v1/triggers", authMiddleware, triggerRouter);
app.use("/api/v1/zap-runs", authMiddleware, zapRunRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/folders", authMiddleware, folderRouter);
app.use("/api/v1/open", openRouter);
app.use(errorMiddleware);
app.listen(PORT, () => {
  console.log("Server is listening on port: ", PORT);
});
