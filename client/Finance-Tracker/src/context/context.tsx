import { useUser } from "@clerk/clerk-react";
import { createContext, useContext, useEffect, useState } from "react";

export interface Record {
    _id?: string;
    userId: string;
    date: Date;
    description: string;
    amount: number;
    category: string;
    paymentMethod: string;
  }
  
  interface ContextType {
    records: Record[];
    addRecord: (record: Record) => void;
    // updateRecord: (id: string, newRecord: Record) => void;
    // deleteRecord: (id: string) => void;
  }


export const RecordContext = createContext <ContextType | undefined>(undefined);

export const FinancialRecordProvider = ({children}: {children: React.ReactNode}) => {

    const [records, setRecords] = useState<Record[]>([]);
    const {user} = useUser();

    const fetchRecords = async () => {
        if (!user) return;
        const response = await fetch(
            `http://localhost:5173/financial-records//getAllByUserID:userId/${user?.id ?? ""}`
        );
        if (response.ok){
            const records = await response.json();
            console.log(records)
            setRecords(records)
        }
    };

    useEffect (()=>{
        fetchRecords();
    }, [user]);

    const addRecord = async (record: Record) => {
        const response = await fetch("http://localhost:5173/financial-records", {
          method: "POST",
          body: JSON.stringify(record),
          headers: {
            "Content-Type": "application/json",
          },
        });
    
        try {
          if (response.ok) {
            const newRecord = await response.json();
            setRecords((prev) => [...prev, newRecord]);
          }
        } catch (err) {}
      };

    return ( 
        <RecordContext.Provider value = {{records, addRecord}}>
            {""}
            {children}
        </RecordContext.Provider>
    );
}

export const useFinancialRecords = () => {
    const context = useContext<ContextType | undefined>(
        RecordContext
    );

    if (!context){
        throw new Error("UseFinancialRecords must be used within provider");
    }
    return context;
}