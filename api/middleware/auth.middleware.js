import boom from "boom";

const checkApiKey = (req, res, next) => {
  const apiKey = req.headers["api"];

  if (apiKey === "123") {
    next();
  } else {
    res.status(401).json({
      error: "Unauthorized",
    });
  }
};

const checkAdminRole = (...roles) => {
  return (req, res, next) => {
    const user = req.user;
    if (roles.includes(user.role)) {
      next();
    } else {
      next(boom.forbidden());
    }
  };
};

export { checkApiKey, checkAdminRole };
