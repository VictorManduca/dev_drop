import axios from 'axios'

import environment from '../../../environments/environment'

export function callNewFileApi(payload) {
  return axios({
    method: 'POST',
    url: `${environment.urlBase}/file`,
    data: payload,
  })
}

export function callGetAllFoldersFile(userId, folderId) {
  return axios({
    method: 'GET',
    url: `${environment.urlBase}/file/all/user/${userId}/folder/${folderId}`,
  })
}

export function callDeleteFileApi(fileId) {
  return axios({
    method: 'DELETE',
    url: `${environment.urlBase}/file/${fileId}`,
    data: payload,
  })
}
