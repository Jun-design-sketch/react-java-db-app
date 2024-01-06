import { apiClient } from './ApiClient'

export function executeBasicAuthenticationService(specificUrl, token){
  return apiClient.get(`/${specificUrl}`,
                  {headers: { 'Authorization': token }})
}

export const executeJwtAuthenticationService
  = (username, password) => apiClient.post(`/authenticate`, {username, password})