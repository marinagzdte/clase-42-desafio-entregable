import supertest from "supertest";
import chai from "chai";
import faker from "faker";

const request = supertest('http://localhost:8080')
const expect = chai.expect

describe("Tests de API Restful", () => {
    let newId;
    it("GET /api/productos debería recuperar 0 productos.", async () => {
        let response = await request.get('/api/productos')
        expect(response.status).to.eql(200)
        expect(response.body.length).to.eql(0)
    })

    it("POST /api/productos debería agregar un producto.", async () => {
        let response = await request.post('/api/productos').send({
            title: faker.commerce.product(),
            price: faker.commerce.price(),
            thumbnail: faker.image.image()
        })
        expect(response.status).to.eql(200)
        expect(response.body.id).to.not.be.null
    })

    let id;
    it("GET /api/productos debería recuperar 1 producto.", async () => {
        let response = await request.get('/api/productos')
        expect(response.status).to.eql(200)
        expect(response.body.length).to.eql(1)
        id = response.body[0].id
    })

    const newData = {
        title: faker.commerce.product(),
        price: faker.commerce.price(),
        thumbnail: faker.image.image()
    }

    it(`PUT /api/productos/${id} debería modificar el producto recién creado.`, async () => {
        let response = await request.put(`/api/productos/${id}`).send(newData)
        expect(response.status).to.eql(204)
    })

    it(`GET /api/productos/${id} debería traer el producto modificado.`, async () => {
        let response = await request.get(`/api/productos/${id}`)
        expect(response.status).to.eql(200)
        expect(response.body.title).to.eql(newData.title)
        expect(response.body.price).to.eql(newData.price)
        expect(response.body.thumbnail).to.eql(newData.thumbnail)
    })

    it("DELETE /api/productos debería borrar todos los productos.", async () => {
        let response = await request.delete('/api/productos')
        expect(response.status).to.eql(204)
    })

    it("GET /api/productos debería recuperar 0 productos.", async () => {
        let response = await request.get('/api/productos')
        expect(response.status).to.eql(200)
        expect(response.body.length).to.eql(0)
    })
})