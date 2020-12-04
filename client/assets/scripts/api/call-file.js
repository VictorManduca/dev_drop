import axios from 'axios'

import environment from '../../../environments/environment'

export function callNewFileApi(payload) {
  return axios({
    method: 'POST',
    url: `${environment.urlBase}/file`,
    data: payload,
  })
}

export function callDeleteFileApi(fileId) {
  return axios({
    method: 'DELETE',
    url: `${environment.urlBase}/file/${fileId}`,
    data: payload,
  })
}
