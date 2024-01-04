import axios from 'axios'

const apiClient = axios.create(
  {
    baseURL: 'http://localhost:8080'
  }
)

const headers = {
  headers: { 'Authorization': 'Basic dXNlcm5hbWU6cGFzc3dvcmQ=' }
}

export const retrieveAllTodosForUsernameApi
  = (username) => apiClient.get(`/users/${username}/todos`, headers)

export const retrieveTodoApi
= (username, id) => apiClient.get(`/users/${username}/todos/${id}`, headers)

export const deleteTodoApi
  = (username, id) => apiClient.delete(`/users/${username}/todos/${id}`, headers)

export const updateTodoApi
  = (username, id, todo) => apiClient.put(`/users/${username}/todos/${id}`, todo, headers)

export const createTodoApi
  = (username, todo) => apiClient.post(`/users/${username}/todos`, todo, headers)