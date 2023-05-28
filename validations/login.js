import { check } from 'express-validator';

export const loginValidation = [
  check('login', 'Почта или логин не должны быть пустыми').isLength({ min: 3 }),
  check('password', 'Пароль не должен быть пустым.').isLength({ min: 6 }),
];
