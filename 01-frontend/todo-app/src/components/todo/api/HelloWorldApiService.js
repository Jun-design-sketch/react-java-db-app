import axios from 'axios'

export function retrieveHelloWorldBean(){
  return axios.get('http://localhost:8080/hello-world-bean', {headers: { 'Authorization': 'Basic dXNlcm5hbWU6cGFzc3dvcmQ=' }})
}

// another way to write
// export const retrieveHelloWorldBean =
// () => axios.get('http://localhost:8080/hello-world-bean', {headers: { 'Authorization': 'Basic dXNlcm5hbWU6cGFzc3dvcmQ=' }})