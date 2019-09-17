const request = require('supertest')
const app = require('../src/app')


describe('GET Endpoints', () => {
  it('should create a new get', async () => {
    const res = await request(app)
      .get('/')
      .send({
        userId: 1,
        title: "",
        version: ""
      })
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('title');
    expect(res.body).toHaveProperty('version');
  })

})

describe('PUT Endpoints', () => {
  it('should create a new put', async () => {
    const res = await request(app)
      .put('products/:id')
      .send({
        id: 1,
        item: 123
      })
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id');
    expect(res.body).toHaveProperty('item');
  })

})


describe('DELETE Endpoints', () => {
  it('should create a new delete', async () => {
    const res = await request(app).delete('/');
    expect(res.statusCode).toEqual(200);
  })

})