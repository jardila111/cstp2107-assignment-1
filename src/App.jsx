import { useState } from 'react'
import users from '../data.json'
import UserCard from './components/UserCard'
import './App.css'

function App() {
  // Part 1: the user list lives in local component state, seeded from the
  // local data.json file (no network request yet -- that's part 2).
  const [userList] = useState(users)

  return (
    <div className="page">
      <h1 className="page__title">User Directory</h1>
      <p className="page__subtitle">
        {userList.length} users, loaded from the local data.json file.
      </p>

      <div className="user-grid">
        {userList.map((user) => (
          <UserCard
            key={user.id}
            avatar={user.avatar}
            name={`${user.first_name} ${user.last_name}`}
            email={user.email}
          />
        ))}
      </div>
    </div>
  )
}

export default App
