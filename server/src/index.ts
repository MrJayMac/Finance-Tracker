//User: macjoshua450
//PWD: jygrkkoPP04wAAvS
import express, { Express } from "express";
import mongoose from "mongoose";
import recordRouter from "./routes/financial-records"

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const mongoURI: string = "mongodb+srv://macjoshua450:jygrkkoPP04wAAvS@personalfinancetracker.8wsjtiw.mongodb.net/"

mongoose
.connect(mongoURI)
.then(() => console.log("CONNECT TO MONGODB!"))
.catch((err) => console.error("Failed to Connect to MONGODB"))

app.use("/financial-records", recordRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

