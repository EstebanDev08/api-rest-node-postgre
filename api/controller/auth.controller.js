import { singToken } from "../utils/jwt_manager.js";

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
}

export { AuthtController };
