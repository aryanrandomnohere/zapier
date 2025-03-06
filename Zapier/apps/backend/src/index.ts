import express from "express";
import { zapRouter } from "./router/zapRouter";
import { userRouter } from "./router/userRouter";

const app = express()
app.use(express.json())
app.use("api/v1/",zapRouter)
app.use("api/v1/",userRouter)