import supertest from 'supertest'

import index from '../src/app'
import buildFolderPaload from './resources/folder'
import buildFilePayload from './resources/file'
import { buildCategoryPayload } from './resources/category'
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
    const folderPayloadPut = buildFolderPaload(userID, categoryId, fileID)
    const folderID = await supertest(index)
      .post('/drop/folder')
      .send(folderPayloadPost)
      .then(response => {
        expect(response.statusCode).toBe(201)
        return response.body.id
      })

    await supertest(index)
      .get('/drop/folder')
      .then(response => {
        expect(response.statusCode).toBe(200)
        expect(response.body.data.length).not.toBe(0)
      })

    await supertest(index)
      .get(`/drop/folder/${folderID}`)
      .then(response => {
        expect(response.statusCode).toBe(200)
        expect(response.body.data.id).toBe(folderID)
        expect(response.body.data.ArquivoID).toBe(folderPayloadPost.arquivoId)
        expect(response.body.data.UsuarioID).toBe(folderPayloadPost.usuarioId)
        expect(response.body.data.TipoCategoriaID).toBe(folderPayloadPost.tipoCategoriaId)
        expect(response.body.data.Nome).toBe(folderPayloadPost.nome)
      })

    await supertest(index)
      .put(`/drop/folder/${folderID}`)
      .send(folderPayloadPut)
      .then(response => expect(response.statusCode).toBe(200))

    await supertest(index)
      .get(`/drop/folder/${folderID}`)
      .then(response => {
        expect(response.statusCode).toBe(200)
        expect(response.body.data.id).toBe(folderID)
        expect(response.body.data.ArquivoID).toBe(folderPayloadPut.arquivoId)
        expect(response.body.data.UsuarioID).toBe(folderPayloadPut.usuarioId)
        expect(response.body.data.TipoCategoriaID).toBe(folderPayloadPut.tipoCategoriaId)
        expect(response.body.data.Nome).toBe(folderPayloadPut.nome)
      })

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
