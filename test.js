const request = require('supertest')
const { expect } = require('chai')
const app = require('./index.js')

describe('GET /', () => {
  it('should say hello', async () => {
    const res = await request(app).get('/').expect(200)
    expect(res.text).to.equal('Hello!')
  })
})

describe('GET /environment', () => {
  it('should tell us the environment', async () => {
    const res = await request(app).get('/environment').expect(200)
    expect(res.text).to.match(/This is the development environment/)
  })
})
