import { check } from 'express-validator';

export const loginValidation = [
  check('email', 'Неверный формат почты').isEmail(),
  check('password', 'Пароль не должен быть пустым.').isLength({ min: 1 }),
];
