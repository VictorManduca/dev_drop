import supertest from 'supertest'

import index from '../src/app'
import buildFolderPaload from './resources/folder'
import buildFilePayload from './resources/file'
import buildGroupPayload from './resources/group'
import { buildCategoryPayload } from './resources/category'
import { buildPermissionPayload } from './resources/permission'
import { buildUserPayload } from './resources/user'

jest.setTimeout(10000)

describe('Test routines', () => {
  it('should go well', async done => {
    const userPayloadPost = buildUserPayload()
    const userID = await supertest(index)
      .post('/drop/user')
      .send(userPayloadPost)
      .then(response => {
        expect(response.statusCode).toBe(201)
        return response.body.id
      })

    const filePayloadPost = buildFilePayload(userID)
    const fileID = await supertest(index)
      .post('/drop/file')
      .send(filePayloadPost)
      .then(response => {
        expect(response.statusCode).toBe(201)
        return response.body.id
      })

    const categoryPayloadPost = buildCategoryPayload()
    const categoryId = await supertest(index)
      .post('/drop/category')
      .send(categoryPayloadPost)
      .then(response => {
        expect(response.statusCode).toBe(201)
        return response.body.id
      })

    const folderPayloadPost = buildFolderPaload(userID, categoryId, fileID)
    const folderID = await supertest(index)
      .post('/drop/folder')
      .send(folderPayloadPost)
      .then(response => {
        expect(response.statusCode).toBe(201)
        return response.body.id
      })

    const permissionPayloadPost = buildPermissionPayload()
    permissionPayloadPost.usuarioId = userID
    const permissionID = await supertest(index)
      .post('/drop/permission')
      .send(permissionPayloadPost)
      .then(response => {
        expect(response.statusCode).toBe(201)
        return response.body.id
      })

    const groupPayloadPost = buildGroupPayload(userID, folderID, permissionID)
    const groupPayloadPut = buildGroupPayload(userID, folderID, permissionID)
    const groupID = await supertest(index)
      .post('/drop/group')
      .send(groupPayloadPost)
      .then(response => {
        expect(response.statusCode).toBe(201)
        return response.body.id
      })

    await supertest(index)
      .get('/drop/group')
      .then(response => {
        expect(response.statusCode).toBe(200)
        expect(response.body.data.length).not.toBe(0)
      })

    await supertest(index)
      .get(`/drop/group/${groupID}`)
      .then(response => {
        expect(response.statusCode).toBe(200)
        expect(response.body.data.id).toBe(groupID)
        expect(response.body.data.UsuarioID).toBe(groupPayloadPost.usuarioId)
        expect(response.body.data.PastaID).toBe(groupPayloadPost.pastaId)
        expect(response.body.data.PermissaoID).toBe(groupPayloadPost.permissaoId)
        expect(response.body.data.Nome).toBe(groupPayloadPost.nome)
      })

    await supertest(index)
      .put(`/drop/group/${groupID}`)
      .send(groupPayloadPut)
      .then(response => expect(response.statusCode).toBe(200))

    await supertest(index)
      .get(`/drop/group/${groupID}`)
      .then(response => {
        expect(response.statusCode).toBe(200)
        expect(response.body.data.id).toBe(groupID)
        expect(response.body.data.UsuarioID).toBe(groupPayloadPut.usuarioId)
        expect(response.body.data.PastaID).toBe(groupPayloadPut.pastaId)
        expect(response.body.data.PermissaoID).toBe(groupPayloadPut.permissaoId)
        expect(response.body.data.Nome).toBe(groupPayloadPut.nome)
      })

    await supertest(index)
      .delete(`/drop/group/${groupID}`)
      .then(response => expect(response.statusCode).toBe(200))

    await supertest(index)
      .delete(`/drop/permission/${permissionID}`)
      .then(response => expect(response.statusCode).toBe(200))

    await supertest(index)
      .delete(`/drop/folder/${folderID}`)
      .then(response => expect(response.statusCode).toBe(200))

    await supertest(index)
      .delete(`/drop/folder/${categoryId}`)
      .then(response => expect(response.statusCode).toBe(200))

    await supertest(index)
      .delete(`/drop/file/${fileID}`)
      .then(response => expect(response.statusCode).toBe(200))

    await supertest(index)
      .delete(`/drop/user/${userID}`)
      .then(response => {
        expect(response.statusCode).toBe(200)

        done()
      })
  })
})
