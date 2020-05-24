import User from '../models/User';

class UserController {
  async store(req, res) {
    const { email } = req.body;

    const emailAlreadyExists = await User.findOne({ where: { email } });

    if (emailAlreadyExists) {
      return res.status(400).json({ error: 'Duplicated email' });
    }

    const user = await User.create(req.body);

    return res.json(user);
  }
}

export default new UserController();
