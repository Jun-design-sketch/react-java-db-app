import { apiClient } from './ApiClient'

export function retrieveHelloWorldBean(specificUrl, username, token){
  if(!username){
    return apiClient.get(`/${specificUrl}`)
  }else{
    return apiClient.get(`/${specificUrl}/${username}`)
  }
}

export function executeBasicAuthenticationService(specificUrl, token){
    return apiClient.get(`/${specificUrl}`,
                    {headers: { 'Authorization': token }})
}

// another way to write
// export const retrieveHelloWorldBean =
// () => axios.get('http://localhost:8080/hello-world-bean', {headers: { 'Authorization': 'Basic dXNlcm5hbWU6cGFzc3dvcmQ=' }})