import { useState } from "react"

function Record() {

    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState('')
    const [payment, setPayment] = useState('')

    const handleSubmit = () =>{

    };


    return (
    <div>
        Record
        <form onSubmit={handleSubmit}>
            <div className="form-field">
                <label>Description:</label>
                <input type="text" required className="input"></input>
            </div>
            <div className="form-field">
                <label>Amount:</label>
                <input type="number" required className="input"></input>
            </div>
            <div className="form-field">
                <label>Category:</label>
                <select required className="input">
                    <option value="">Select a Category</option>
                    <option value="Food">Food</option>
                    <option value="Rent">Rent</option>
                    <option value="Salary">Salary</option>
                    <option value="Utilities">Utilities</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div className="form-field">
                <label>Payment Method:</label>
                <select required className="input">
                    <option value="">Select a payment method</option>
                    <option value="Debit">Debit</option>
                    <option value="Credit">Credit</option>
                </select>
            </div>
            <button type="submit" className="button">
                Add Record
            </button>
        </form>
    </div>
    )
  }
  
  export default Record
  