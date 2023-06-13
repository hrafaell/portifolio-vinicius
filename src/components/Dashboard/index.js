import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useState, useEffect } from 'react'
import Loguin from '../Loguin'
import Home from './home'

const Dashboard = () => {
  const [user, setUser] = useState(null)
  const auth = getAuth()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    })
  }, [])

  return <div>{user ? <Home /> : <Loguin />}</div>
}

export default Dashboard
