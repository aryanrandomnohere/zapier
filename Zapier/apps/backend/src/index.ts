import express from "express";
import { zapRouter } from "./router/zapRouter";
import { userRouter } from "./router/userRouter";
const PORT = 3000;
const app = express()
app.use(express.json())
app.use("/api/v1/zap",zapRouter)
app.use("/api/v1",userRouter)

app.listen(PORT,()=>{
    console.log("Server is listening on port: ", PORT)
})