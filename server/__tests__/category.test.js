jest.setTimeout(10000)

import supertest from 'supertest'

import index from '../src/app'
import { buildCategoryPayload } from './resources/category'

describe('Test routines', () => {
	it('should go well', async done => {
    const categoryPayloadPost = buildCategoryPayload()
    const categoryPayloadPut = buildCategoryPayload()

		const categoryId = await supertest(index)
			.post('/drop/category')
			.send(categoryPayloadPost)
			.then(response => {
				expect(response.statusCode).toBe(201)
				return response.body.id
			})

		await supertest(index)
			.get('/drop/category')
			.then(response => {
				expect(response.statusCode).toBe(200)
				expect(response.body.data.length).not.toBe(0)
			})

		await supertest(index)
			.get(`/drop/category/${ categoryId }`)
			.then(response => {
				expect(response.statusCode).toBe(200)
				expect(response.body.data.id).toBe(categoryId)
				expect(response.body.data.indice).toBe(categoryPayloadPost.indice)
				expect(response.body.data.descricao).toBe(categoryPayloadPost.descricao)
			})

		await supertest(index)
			.put(`/drop/category/${ categoryId }`)
			.send(categoryPayloadPut)
			.then(response => expect(response.statusCode).toBe(200))

		await supertest(index)
			.get(`/drop/category/${ categoryId }`)
			.then(response => {
				expect(response.statusCode).toBe(200)
				expect(response.body.data.id).toBe(categoryId)
				expect(response.body.data.indice).toBe(categoryPayloadPut.indice)
				expect(response.body.data.descricao).toBe(categoryPayloadPut.descricao)
			})

		await supertest(index)
			.delete(`/drop/category/${ categoryId }`)
			.then(response => expect(response.statusCode).toBe(200))

		await supertest(index)
			.get(`/drop/category/${ categoryId }`)
			.then(response => {
				expect(response.statusCode).toBe(200)
				expect(response.body.data.length).toBe(0)

				done()
			})
	})
})