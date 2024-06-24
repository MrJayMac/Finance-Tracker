import express, {Request, Response} from "express";
import Model from "../schema/record";
import { model } from "mongoose";

const router = express.Router();

router.get("/getAllByUserID:userId", async (req: Request, res: Response) =>{
    try{
        const userId = req.params.userId
        const records = await Model.find({userId: userId})
        if (records.length === 0){
            return res.status(404).send("No records found for the user.")
        }
        res.status(200).send(records)
    } catch(err){
        res.status(500).send(err)
    }
})

router.post("/", async (req: Request, res: Response) =>{
    try{
        const newRecordBody = req.body
        const newRecord = new Model(newRecordBody)
        const savedRecord = await newRecord.save
        res.status(200).send(savedRecord)
    } catch(err){
        res.status(500).send(err)
    }
})

router.put("/", async (req: Request, res: Response) =>{
    try{
        const id = req.params.id
        const newRecordBody = req.body
        const record = await Model.findByIdAndUpdate(
            id,
            newRecordBody,
            { new: true }
        )

        if (!record) return res.status(404).send();
        res.status(200).send(record)
    } catch(err){
        res.status(500).send(err)
    }
})

router.delete("/", async (req: Request, res: Response) =>{
    try{
        const id = req.params.id
        const record = await Model.findByIdAndDelete(id);
        if (!record) return res.status(404).send();
        res.status(200).send(record)
    } catch(err){
        res.status(500).send(err)
    }
})

export default router;