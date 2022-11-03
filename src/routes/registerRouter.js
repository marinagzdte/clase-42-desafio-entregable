import passport from '../middlewares/passport.js';
import { Router } from 'express';
import logger from '../utils/logger.js';

const registerRouter = new Router();

registerRouter.get('/register', logger.logReqInfo, (req, res) => {
    res.render('register');
})

registerRouter.post('/register', passport.authenticate('register', { failureRedirect: '/register/error' }), (req, res) => { res.redirect('/login') });

registerRouter.get('/register/error', logger.logReqInfo, (req, res) => {
    res.render('autherror', { registerError: true })
})

export default registerRouter;