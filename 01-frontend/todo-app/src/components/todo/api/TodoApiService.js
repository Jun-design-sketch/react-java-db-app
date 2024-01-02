import axios from 'axios'

const apiClient = axios.create(
  {
    baseURL: 'http://localhost:8080'
  }
)

export const retrieveAllTodosForUsernameApi
  = (username) => apiClient.get(`/users/${username}/todos`, {headers: { 'Authorization': 'Basic dXNlcm5hbWU6cGFzc3dvcmQ=' }})

export const retrieveTodoApi
= (username, id) => apiClient.get(`/users/${username}/todos/${id}`, {headers: { 'Authorization': 'Basic dXNlcm5hbWU6cGFzc3dvcmQ=' }})

export const deleteTodoApi
  = (username, id) => apiClient.delete(`/users/${username}/todos/${id}`, {headers: { 'Authorization': 'Basic dXNlcm5hbWU6cGFzc3dvcmQ=' }})