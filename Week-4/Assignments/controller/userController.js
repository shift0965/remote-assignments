import User from "../model/userModel.js";

const UserController = {
  async checkEmailExist(req, res) {
    const { email } = req.body;
    const result = await User.checkEmailExist(email);
    res.send(result);
  },

  async checkEmailPassword(req, res) {
    const { email, password } = req.body;
    const { user } = await User.checkEmailPassword(email, password);
    if (user) {
      req.session.authorized = true;
      req.session.user = user;
      const { username } = req.session.user;
      res.status(200).redirect("/user");
    } else {
      res.status(401).json({ message: "Password is incorrect" });
    }
  },

  async user(req, res) {
    const { username } = req.session.user;
    res.render("user", { username });
  },

  async addUser(req, res) {
    const { userName, email, password } = req.body;
    const user = await User.addUser(userName, email, password);
    req.session.authorized = true;
    req.session.user = user;
    res.status(200).redirect("/user");
  },

  async removeUser(req, res) {
    const { id } = res.session.user;
    const result = await User.removeUser(id);
    res.redirect("/logout");
  },

  async logout(req, res) {
    req.session.destroy(null);
    res.redirect("/");
  },
};

export default UserController;
