import bcrypt from 'bcrypt';
import UserModel from '../models/User.js';
import jwt from 'jsonwebtoken';

import secretKey from '../config.js';

class AuthController {
  async registration(req, res) {
    try {
      const candidateEmail = await UserModel.findOne({ email: req.body.email });
      if (candidateEmail) {
        return res.status(403).json({
          message: 'Данная почта уже зарегистрирован.',
        });
      }

      const candidateLogin = await UserModel.findOne({ login: req.body.login });
      if (candidateLogin) {
        return res.status(403).json({
          message: 'Данный логин уже зарегистрирован.',
        });
      }

      const password = req.body.password;
      const salt = await bcrypt.genSalt(5);
      const passwordHash = await bcrypt.hash(password, salt);

      const doc = new UserModel({
        login: req.body.login,
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        passwordHash,
      });

      const user = await doc.save();

      const token = jwt.sign(
        {
          _id: user['_id'],
        },
        secretKey.key,
        {
          expiresIn: '1h',
        },
      );

      res.json({
        token,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: 'Не удалось зарегистрироваться.',
      });
    }
  }

  async login(req, res) {
    try {
      const re =
        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

      let user;
      if (re.test(req.body.login)) {
        user = await UserModel.findOne({ email: req.body.login });
      } else {
        user = await UserModel.findOne({ login: req.body.login });
      }

      if (!user) {
        return res.status(403).json({
          message: 'Неверный логин/почта или пароль',
        });
      }

      const isValidPass = await bcrypt.compare(req.body.password, user['_doc'].passwordHash);

      if (!isValidPass) {
        return res.status(403).json({
          message: 'Неверный логин/почта или пароль',
        });
      }

      const token = jwt.sign(
        {
          _id: user['_id'],
        },
        secretKey.key,
        {
          expiresIn: '1h',
        },
      );

      res.json({
        token,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        messageError: 'Не удалось авторизоваться',
      });
    }
  }
}

export default AuthController;
