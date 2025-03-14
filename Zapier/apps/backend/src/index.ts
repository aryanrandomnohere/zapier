import express from "express";
import { zapRouter } from "./router/zapRouter";
import { userRouter } from "./router/userRouter";
import cors from "cors"
const PORT = 3001;
const app = express()
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json())
app.use("/api/v1/zap",zapRouter)
app.use("/api/v1",userRouter)

app.listen(PORT,()=>{
    console.log("Server is listening on port: ", PORT)
})