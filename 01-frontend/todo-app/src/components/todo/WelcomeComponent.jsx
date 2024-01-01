import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { retrieveHelloWorldBean } from './api/HelloWorldApiService'

export default function WelcomeComponent() {

  const { username } = useParams()

  const[message, setMessage] = useState(null)

  function callHelloWorldRestApi(){
    // from localhost:8080 to localhost:3000
    // Cross Origin Requests (CORs)
    // By default, CORs Requests fail (blocked)
    // need allow requests only from localhost:8080
    console.log("called")
    retrieveHelloWorldBean()
          .then((response) => successfulResponse(response))
          .catch((error) => errorResponse(error))
          .finally(() => console.log('cleanup'))
  }

  function successfulResponse(response){
    setMessage(response.data)
  }

  function errorResponse(error){
    setMessage("uhhh...")
  }

  return (
    <div className="Welcome">
      <h1>Welcome {username}</h1>
      <div>
        Manage your todos - <Link to="/todos">Go here</Link>
      </div>
      <div>
      <button className="btn btn-success m-5" onClick={callHelloWorldRestApi}>CallHelloWorldApi</button>
      </div>
      <div className="text-info">{JSON.stringify(message)}</div>
    </div>
  )
}
