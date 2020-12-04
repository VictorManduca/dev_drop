import axios from 'axios'
import environment from '../../../environments/environment'

export function callNewFolderApi(payload) {
  return axios({
    method: 'POST',
    url: `${environment.urlBase}/folder`,
    data: payload,
  })
}

export function callAllUserFolders(userId) {
  return axios({
    method: 'GET',
    url: `${environment.urlBase}/folder/all/user/${userId}`,
  })
}

export function callDeleteFolderApi(folderId) {
  return axios({
    method: 'DELETE',
    url: `${environment.urlBase}/folder/${folderId}`,
  })
}
