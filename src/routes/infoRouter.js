import { Router } from 'express';
import os from 'os';
import logger from '../utils/logger.js';

const infoRouter = new Router();

infoRouter.get('/info', logger.logReqInfo, (req, res) => {
    try {
        const info = {
            os: process.platform,
            nodeVersion: process.version,
            rss: process.memoryUsage().rss,
            directory: process.cwd(),
            pid: process.pid,
            path: process.execPath,
            args: process.argv,
            cpus: os.cpus().length
        };
        res.render('info', info);
    } catch (error) {
        logger.logError(error);
    }
})

export default infoRouter;