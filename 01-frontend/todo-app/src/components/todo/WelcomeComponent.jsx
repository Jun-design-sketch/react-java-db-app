import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

export default function WelcomeComponent() {

  const { username } = useParams()

  function callHelloWorldRestApi(){
    console.log("called")
    axios.get('http://localhost:8080/hello-world', {headers: { 'Authorization': 'Basic dXNlcm5hbWU6cGFzc3dvcmQ=' }})
          .then((response) => successfulResponse(response))
          .catch((error) => errorResponse(error))
          .finally(() => console.log('cleanup'))
          // from localhost:8080 to localhost:3000
          // Cross Origin Requests (CORs)
          // By default, CORs Requests fail (blocked)
          // need allow requests only from localhost:8080
  }

  function successfulResponse(response){
    console.log(response)
  }

  function errorResponse(error){
    console.log(error)
  }

  return (
    <div className="Welcome">
      <h1>Welcome {username}</h1>
      <div>
        Manage your todos - <Link to="/todos">Go here</Link>
      </div>
      <div>
        <button className="btn btn-success m-5" onClick={callHelloWorldRestApi}>Call Hello World</button>
      </div>
    </div>
  )
}
