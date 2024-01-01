import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { retrieveHelloWorldBean } from './api/HelloWorldApiService'

export default function WelcomeComponent() {

  const { username } = useParams()

  const[message, setMessage] = useState(null)

  function callHelloWorldRestApi(specificUrl, username){
    // from localhost:8080 to localhost:3000
    // Cross Origin Requests (CORs)
    // By default, CORs Requests fail (blocked)
    // need allow requests only from localhost:8080
    console.log("called")
    retrieveHelloWorldBean(specificUrl, username)
          .then((response) => successfulResponse(response))
          .catch((error) => errorResponse(error))
          .finally(() => console.log('cleanup'))
  }

  function successfulResponse(response){
    setMessage(response.data)
  }

  function errorResponse(error){
    setMessage("there are some troubles...")
  }

  return (
    <div className="Welcome">
      <h1>Welcome {username}</h1>
      <div>
        Manage your todos - <Link to="/todos">Go here</Link>
      </div>
      <div>
        <br></br>
        <h2>Practice API a little</h2>
        <button className="btn btn-success m-5" onClick={() => callHelloWorldRestApi('hello-world')}>Api</button>
        <button className="btn btn-success m-5" onClick={() => callHelloWorldRestApi('hello-world-bean')}>BeanApi</button>
        <button className="btn btn-success m-5" onClick={() => callHelloWorldRestApi('hello-world/path-variable', username)}>ParamApi</button>
      </div>
      <div className="text-info">{JSON.stringify(message)}</div>
    </div>
  )
}
