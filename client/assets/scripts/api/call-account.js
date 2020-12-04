import axios from 'axios'
import environment from '../../../environments/environment'

export function callNewAccountApi(payload) {
  return axios({ 
    method: 'POST',
    url: `${ environment.urlBase }/user`,
    data: payload
  })
}