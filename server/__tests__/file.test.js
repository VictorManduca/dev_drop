import supertest from 'supertest'

import index from '../src/app'
import { buildUserPayload } from './resources/user'
import buildFilePayload from './resources/file'

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
    const filePayloadPut = buildFilePayload(userID)
    const fileID = await supertest(index)
      .post('/drop/file')
      .send(filePayloadPost)
      .then(response => {
        expect(response.statusCode).toBe(201)
        return response.body.id
      })

    await supertest(index)
      .get('/drop/file')
      .then(response => {
        expect(response.statusCode).toBe(200)
        expect(response.body.data.length).not.toBe(0)
      })

    await supertest(index)
      .get(`/drop/file/${fileID}`)
      .then(response => {
        expect(response.statusCode).toBe(200)
        expect(response.body.data.id).toBe(fileID)
        expect(response.body.data.UsuarioID).toBe(userID)
        expect(response.body.data.Nome).toBe(filePayloadPost.nome)
        expect(response.body.data.eFavorito).toBe(filePayloadPost.eFavorito)
        expect(response.body.data.Arquivo).toBe(
          Buffer.from(filePayloadPost.arquivo).toString('base64')
        )
      })

    await supertest(index)
      .put(`/drop/file/${fileID}`)
      .send(filePayloadPut)
      .then(response => expect(response.statusCode).toBe(200))

    await supertest(index)
      .get(`/drop/file/${fileID}`)
      .then(response => {
        expect(response.statusCode).toBe(200)
        expect(response.body.data.id).toBe(fileID)
        expect(response.body.data.Nome).toBe(filePayloadPut.nome)
        expect(response.body.data.eFavorito).toBe(filePayloadPut.eFavorito)
        expect(response.body.data.Arquivo).toBe(
          Buffer.from(filePayloadPut.arquivo).toString('base64')
        )
      })

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
