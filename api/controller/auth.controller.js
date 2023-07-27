class AuthtController {
  static autenticate = async (req, res) => {
    const data = req.user;
    if (data) {
      res.json(data);
    } else {
      res.status(404).json({
        message: `error`,
      });
    }
  };
}

export { AuthtController };
