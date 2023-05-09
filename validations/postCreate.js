import { check } from 'express-validator';

export const postCreateValidation = [
  check('title', 'Введите заголовок').isLength({ min: 3 }).isString(),
  check('text', 'Введите текст статьи').isLength({ min: 3 }).isString(),
  check('imageUrl', 'Неверная ссылка на изображение').optional().isString(),
];
