import ProductsRepository from "../repositories/ProductsRepository.js";

const productsRepo = new ProductsRepository();

const getAllProducts = async (req, res) => {
    const prods = await productsRepo.getAll();
    res.json(prods);
}

const getProductById = async (req, res) => {
    const prod = await productsRepo.getById(req.params.id)
    res.json(prod);
}

const updateProductById = async (req, res) => {
    await productsRepo.modifyById(req.params.id, req.body);
    res.status(204);
    res.send();
}

const deleteAllProducts = async (req, res) => {
    await productsRepo.removeAll();
    res.status(204)
    res.send();
}

const deleteProductById = async (req, res) => {
    await productsRepo.removeById(req.params.id);
    res.status(204);
    res.send();
}

const addProduct = async (req, res) => {
    const id = await productsRepo.add(req.body)
    res.json({ id });
}

export { getAllProducts, getProductById, updateProductById, deleteAllProducts, deleteProductById, addProduct }