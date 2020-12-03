import axios from 'axios'
import environment from '../../../environments/environment'

export function callNewFileApi(payload) {
  return axios({ 
    method: 'POST',
    url: `${ environment.urlBase }/file`, //rotas
    data: payload
  })
}

export function callDeleteFileApi(payload) {
  return axios({
    method: 'DELETE',
    url: `${ environment.urlBase }/file/id:`,
    data: payload
  })
}