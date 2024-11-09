import UserContext from './Context/UserContext'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {

  return (
    <UserContextProvider>
      <h1>Learning context API</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
