jest.setTimeout(10000)

import supertest from 'supertest'

import index from '../src/app'
import { buildUserPayload } from './resources/user'
import { buildPermissionPayload } from './resources/permission'

describe('Test routines', () => {
	it('should go well', async done => {
		const userPayloadPost = buildUserPayload()
		const permissionPayloadPost = buildPermissionPayload()
		const permissionPayloadPut = buildPermissionPayload()

		const userID = await supertest(index)
			.post('/drop/user')
			.send(userPayloadPost)
			.then(response => {
				expect(response.statusCode).toBe(201)
				return response.body.id
			})

		permissionPayloadPost.usuarioId = userID
		permissionPayloadPut.usuarioId = userID
		const permissionId = await supertest(index)
			.post('/drop/permission')
			.send(permissionPayloadPost)
			.then(response => {
				expect(response.statusCode).toBe(201)
				return response.body.id
			})

		await supertest(index)
			.get('/drop/permission')
			.then(response => {
				expect(response.statusCode).toBe(200)
				expect(response.body.data.length).not.toBe(0)
			})

		await supertest(index)
			.get(`/drop/permission/${ permissionId }`)
			.then(response => {
				expect(response.statusCode).toBe(200)
				expect(response.body.data.id).toBe(permissionId)
				expect(response.body.data.usuarioId).toBe(permissionPayloadPost.usuarioId)
				expect(response.body.data.eAdministrador).toBe(permissionPayloadPost.eAdministrador)
			})

		await supertest(index)
			.put(`/drop/permission/${ permissionId }`)
			.send(permissionPayloadPut)
			.then(response => expect(response.statusCode).toBe(200))

		await supertest(index)
			.get(`/drop/permission/${ permissionId }`)
			.then(response => {
				expect(response.statusCode).toBe(200)
				expect(response.body.data.id).toBe(permissionId)
				expect(response.body.data.usuarioId).toBe(permissionPayloadPut.usuarioId)
				expect(response.body.data.eAdministrador).toBe(permissionPayloadPut.eAdministrador)
			})

		await supertest(index)
			.delete(`/drop/permission/${ permissionId }`)
			.then(response => expect(response.statusCode).toBe(200))

		await supertest(index)
			.delete(`/drop/user/${ userID }`)
			.then(response => expect(response.statusCode).toBe(200))

		await supertest(index)
			.get(`/drop/user/${ userID }`)
			.then(response => {
				expect(response.statusCode).toBe(200)
				expect(response.body.data.length).toBe(0)
			})

		await supertest(index)
			.get(`/drop/permission/${ permissionId }`)
			.then(response => {
				expect(response.statusCode).toBe(200)
				expect(response.body.data.length).toBe(0)

				done()
			})
	})
})