import Product from '../models/Product.js'
import ProductsDaoFactory from '../daos/products/ProductDaoFactory.js'
import { asDto } from '../dtos/ProductDTO.js'
import logger from '../utils/logger.js'

export default class ProductsRepository {
    #dao

    constructor() {
        this.#dao = ProductsDaoFactory.getDao()
    }

    async getAll() {
        const products = asDto(await this.#dao.getAll())
        return products.map(p => new Product(p));
    }

    async getById(id) {
        const dto = await this.#dao.getById(id)
        return new Product(dto)
    }

    async add(doc) {
        await this.#dao.save(asDto(doc))
    }

    async removeById(id) {
        const removida = await this.#dao.deleteById(id)
        return new Product(removida)
    }

    async removeAll() {
        await this.#dao.deleteAll()
    }
}