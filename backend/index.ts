import express from "express";
const app=express();
import userRouter from "./routers/user"
import workerRouter from "./routers/worker"

import cors from "cors";
//postgres + prisma => ORM
// "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOm51bGwsImlhdCI6MTc0ODU3MTIwOH0.1Co5U0zUOMN2ahG7ctdJyf97QXC5fwigHirVCTBlgEg"

app.use("/v1/user",userRouter);
app.use("/v1/worker",workerRouter);
app.use(express.json());
app.use(cors());
app.listen(3000)
