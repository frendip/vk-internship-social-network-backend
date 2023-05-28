import Router from 'express';
import AuthController from '../controllers/authController.js';
import { registrationValidation } from '../validations/registration.js';
import validationErrorsMiddleware from '../middlewares/validationErrorsMiddleware.js';
import { loginValidation } from '../validations/login.js';

const controller = new AuthController();
const router = new Router();

router.post(
  '/registration',
  registrationValidation,
  validationErrorsMiddleware,
  controller.registration,
);

router.post('/login', loginValidation, validationErrorsMiddleware, controller.login);
export default router;
