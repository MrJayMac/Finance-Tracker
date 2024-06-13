import { useUser } from '@clerk/clerk-react'
import Record from "./Record"
import List from './List'

function Dashboard() {
  const { user } = useUser()
  return (
    <div className="dashboard-container">
      <h1>Welcome {user?.firstName}! Here Are Your Finances:</h1>
      <Record />
      <List/>
    </div>
  )
}

export default Dashboard
