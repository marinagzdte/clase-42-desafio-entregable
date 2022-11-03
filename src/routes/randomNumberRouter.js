import { fork } from 'child_process'
import { Router } from 'express';
import logger from '../utils/logger.js';

const randomNumberRouter = new Router();

randomNumberRouter.get('/randoms', logger.logReqInfo, (req, res) => {
    try {
        const quantity = req.query.cant || 100000000;
        const forked = fork('../src/utils/randomNumberGenerator.js')
        forked.send({ quantity: quantity })
        forked.on('message', resultado => {
            res.json({ resultado })
        })
    } catch (error) {
        logger.logError(error)
    }
})


export default randomNumberRouter;