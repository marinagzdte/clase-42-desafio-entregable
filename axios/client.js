import axios from 'axios';
import logger from "../src/utils/logger.js";

axios.post('http://localhost:8080/api/productos/add', {
    title: "Limon cuadradas",
    price: "200",
    thumbnail: "https://cdn3.iconfinder.com/data/icons/fruits-52/150/icon_fruit_limao-512.png"
}
)
    .then(response => logger.logInfo(`Status de la respuesta: ${response.status}, contenido: \n${JSON.stringify(response.data)}`))
    .catch(error => logger.logError(error));