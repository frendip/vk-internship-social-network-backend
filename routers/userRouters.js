import Router from 'express';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import UserController from '../controllers/userController.js';

const controller = new UserController();
const router = new Router();

router.get('/getMe', authMiddleware, controller.getMe);
router.patch('/updateMe', authMiddleware, controller.updateMe);

export default router;
