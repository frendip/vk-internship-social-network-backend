import { check } from 'express-validator';

export const registrationValidation = [
  check('email', 'Неверный формат почты').isEmail(),
  check('firstname', 'Укажите имя').isLength({ min: 3 }),
  check('firstname', 'Укажите имя').isLength({ min: 3 }),
  check('password', 'Минимум 5 символов').isLength({ min: 5 }),
];
