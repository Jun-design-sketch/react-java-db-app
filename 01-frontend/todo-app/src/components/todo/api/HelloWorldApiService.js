import axios from 'axios'

const apiClient = axios.create(
  {
    baseURL: 'http://localhost:8080'
  }
)

export function retrieveHelloWorldBean(specificUrl, username){
  if(!username){
    return apiClient.get(`/${specificUrl}`,
                    {headers: { 'Authorization': 'Basic dXNlcm5hbWU6cGFzc3dvcmQ=' }})
  }else{
    return apiClient.get(`/${specificUrl}/${username}`,
                    {headers: { 'Authorization': 'Basic dXNlcm5hbWU6cGFzc3dvcmQ=' }})
  }
}

export function executeBasicAuthenticationService(specificUrl, token){
    return apiClient.get(`/${specificUrl}`,
                    {headers: { 'Authorization': token }})
}

// another way to write
// export const retrieveHelloWorldBean =
// () => axios.get('http://localhost:8080/hello-world-bean', {headers: { 'Authorization': 'Basic dXNlcm5hbWU6cGFzc3dvcmQ=' }})