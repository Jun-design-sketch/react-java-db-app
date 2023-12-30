import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginComponent() {

  const [username, setUsername] = useState('in28minutes')
  const [password, setPassword] = useState('')
  const [showSuccessMessage, setShowSeccessMessage] = useState(false)
  const [showErrorMessage, setShowErrorMessage] = useState(false)
  const navigate = useNavigate()

  function handleUsernameChange(event) {
    setUsername(event.target.value)
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value)
  }

  function handelSubmit(event){
    if(username === 'in28minutes' && password === 'dummy'){
      console.log('Success')
      setShowSeccessMessage(true)
      setShowErrorMessage(false)
      navigate(`/welcome/${username}`)
    }else{
      setShowSeccessMessage(false)
      setShowErrorMessage(true)
      console.log('failed')
    }
  }

  return (
    <div className="Login">
      <h1>Time to Login!</h1>
      {showSuccessMessage && <div className="successMessage">Authenticated Successfully</div>}
      {showErrorMessage && <div className="errorMessage" display={showErrorMessage}>Authentication failed. Please check your credentials.</div>}
      <div className="LoginForm">
        <div>
          <label>User Name</label>
          <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
        </div>
        <div>
          <button type="button" name="login" onClick={handelSubmit}>Login</button>
        </div>
      </div>
    </div>
  )
}