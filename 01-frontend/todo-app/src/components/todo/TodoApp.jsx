import { useState } from 'react'
import './TodoApp.css'

export default function TodoApp() {
  return (
    <div className="TodoApp">
      <LoginComponent />
      {/* <WelcomeComponent /> */}
    </div>
  )
}

function LoginComponent() {

  const [username, setUsername] = useState('in28minutes')
  const [password, setPassword] = useState('')

  const [showSuccessMessage, setShowSeccessMessage] = useState(false)
  const [showErrorMessage, setShowErrorMessage] = useState(false)

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
    }else{
      setShowSeccessMessage(false)
      setShowErrorMessage(true)
      console.log('failed')
    }
  }

  function SuccessMessageComponent(){
    if(showSuccessMessage){
      return(
        <div className="successMessage">Authenticated Successfully</div>
      )
    }else{
      return null
    }
  }

    function ErrorMessageComponent(){
      if(showErrorMessage){
        return(
          <div className="errorMessage" display={showErrorMessage}>Authentication failed. Please check your credentials.</div>
        )
      }else{
        return null
      }
    }

  return (
    <div className="Login">
      <SuccessMessageComponent />
      <ErrorMessageComponent />
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

function WelcomeComponent() {
  return (
    <div className="Welcome">
      Welcome Component
    </div>
  )
}