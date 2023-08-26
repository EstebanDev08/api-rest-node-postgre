import { authService } from "../services/auth.service.js";
import { singToken } from "../utils/jwt_manager.js";

const service = new authService();

class AuthtController {
  static autenticate = async (req, res, next) => {
    try {
      const user = req.user;

      const payload = {
        sub: user.id,
        role: user.role,
      };

      const token = singToken(payload);

      res.status(200).json({
        user,
        token,
      });
    } catch (error) {
      next(error);
    }
  };

  static recoveryPassword = async (req, res, next) => {
    try {
      const { email } = req.body;

      const { message } = await service.sendEmail(email);

      res.status(200).json({
        message,
      });
    } catch (error) {
      next(error);
    }
  };

  static changePassword = async (req, res, next) => {
    try {
      const { token, newPassword } = req.body;

      const { message } = await service.changePassword(token, newPassword);

      res.status(200).json({
        message,
      });
    } catch (error) {
      next(error);
    }
  };
}

export { AuthtController };
