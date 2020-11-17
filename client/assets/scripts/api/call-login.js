import axios from 'axios'
import environment from '../../../environments/environment'

export function callLoginApi(payload) {
  return axios({ 
    method: 'POST',
    url: `${ environment.urlBase }/user/login`,
    data: payload
  })
}