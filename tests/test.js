import supertest from "supertest";
import chai from "chai";
import faker from "faker";

const request = supertest('http://localhost:8080')
const expect = chai.expect

describe("Tests de API Restful", () => {
    let newId;
    describe("Recuperar todos los productos", () => {
        it("Debería recuperar 0 productos.", async () => {
            let response = await request.get('/api/productos')
            expect(response.status).to.eql(200)
            expect(response.body.length).to.eql(0)
        })
    });

    describe('Agregar un producto', () => {
        it("Debería agregar un producto.", async () => {
            let response = await request.post('/api/productos').send({
                title: faker.commerce.product(),
                price: faker.commerce.price(),
                thumbnail: faker.image.image()
            })
            expect(response.status).to.eql(200)
            expect(response.body.id).to.not.be.null
        })
    })
})