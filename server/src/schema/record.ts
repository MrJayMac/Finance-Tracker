import mongoose, { model } from "mongoose";

interface FinancialRecord{
    userID: string;
    date: Date;
    description: string;
    amount: number;
    category: string;
    payment: string
}

const record = new mongoose.Schema<FinancialRecord>({
    userID: {type: String, required: true},
    date: {type: Date, required: true},
    description: {type: String, required: true},
    amount: {type: Number, required: true},
    category: {type: String, required: true},
    payment: {type: String, required: true},
})

const Model = mongoose.model<FinancialRecord>(
    'Financial Record', 
    record
);

export default Model;