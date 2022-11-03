import passport from '../middlewares/passport.js';
import { Router } from 'express';
import logger from '../utils/logger.js';

const loginRouter = new Router();

loginRouter.get('/login', logger.logReqInfo, (req, res) => {
    res.render('login')
})

loginRouter.post('/login', passport.authenticate('login', { failureRedirect: '/login/error' }), (req, res) => res.redirect('/'));

loginRouter.get('/logout', logger.logReqInfo, (req, res) => {
    req.logout({ keepSessionInfo: false }, (err) => res.redirect('/'))
})

loginRouter.get('/login/error', logger.logReqInfo, (req, res) => {
    res.render('autherror', { loginError: true })
})

export default loginRouter;