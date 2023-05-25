import UserModel from '../models/User.js';

class UserController {
  async getMe(req, res) {
    try {
      const user = await UserModel.findById(req.userId);

      if (!user) {
        return res.status(404).json({
          message: 'Пользователь не найден',
        });
      }

      res.json({
        user,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        messageError: 'Нет доступа',
      });
    }
  }

  async updateMe(req, res) {
    try {
      const user = await UserModel.findByIdAndUpdate(req.userId, req.body, { new: true });

      if (!user) {
        return res.status(404).json({
          message: 'Пользователь не найден',
        });
      }
      
      res.json({
        user,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        messageError: 'Нет доступа',
      });
    }
  }
}

export default UserController;
