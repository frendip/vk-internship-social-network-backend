import Router from 'express';
import { checkAuth } from '../utils/checkAuth.js';
import UserController from '../controllers/userController.js';

const controller = new UserController();
const router = new Router();

router.get('/getMe', checkAuth, controller.getMe);

export default router;
