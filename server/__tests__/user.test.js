jest.setTimeout(10000)

import supertest from 'supertest'

import index from '../src/app'
import { buildUserPayload } from './resources/user'

describe('Test routines', () => {
	it('should go well', async done => {
		const userPayloadPost = buildUserPayload()
		const userPayloadPut = buildUserPayload()

		const userID = await supertest(index)
			.post('/drop/user')
			.send(userPayloadPost)
			.then(response => {
				expect(response.statusCode).toBe(201)
				return response.body.id
			})

		await supertest(index)
			.get('/drop/user')
			.then(response => {
				expect(response.statusCode).toBe(200)
				expect(response.body.data.length).not.toBe(0)
			})

		await supertest(index)
			.get(`/drop/user/${ userID }`)
			.then(response => {
				expect(response.statusCode).toBe(200)
				expect(response.body.data.id).toBe(userID)
				expect(response.body.data.nome).toBe(userPayloadPost.nome)
				expect(response.body.data.email).toBe(userPayloadPost.email)
			})

		await supertest(index)
			.put(`/drop/user/${ userID }`)
			.send(userPayloadPut)
			.then(response => expect(response.statusCode).toBe(200))

		await supertest(index)
			.get(`/drop/user/${ userID }`)
			.then(response => {
				expect(response.statusCode).toBe(200)
				expect(response.body.data.id).toBe(userID)
				expect(response.body.data.nome).toBe(userPayloadPut.nome)
				expect(response.body.data.email).toBe(userPayloadPut.email)
			})

		await supertest(index)
			.delete(`/drop/user/${ userID }`)
			.then(response => expect(response.statusCode).toBe(200))

		await supertest(index)
			.get(`/drop/user/${ userID }`)
			.then(response => {
				expect(response.statusCode).toBe(200)
				expect(response.body.data.length).toBe(0)

				done()
			})
	})
})