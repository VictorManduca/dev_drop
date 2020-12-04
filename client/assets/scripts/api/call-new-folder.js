import axios from 'axios'
import environment from '../../../environments/environment'

export function callNewFolderApi(payload) {
  return axios({ 
    method: 'POST',
    url: `${ environment.urlBase }/folder`, //rotas
    data: payload
  })
}

export function callDeleteFolderApi(folderId) {
  return axios({
    method: 'DELETE',
    url: `${ environment.urlBase }/folder/${folderId}`,
  })
}