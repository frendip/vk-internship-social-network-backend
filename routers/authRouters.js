import Router from 'express';
import AuthController from '../controllers/authController.js';
import { registrationValidation } from '../validations/registration.js';
import handleValidationErrors from '../utils/handleValidationErrors.js';
import { loginValidation } from '../validations/login.js';

const controller = new AuthController();
const router = new Router();

router.post(
  '/registration',
  registrationValidation,
  handleValidationErrors,
  controller.registration,
);

router.post('/login', loginValidation, handleValidationErrors, controller.login);
export default router;
