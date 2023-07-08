import { ValidationError } from "sequelize";

const handleErrorSql = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    res.status(409).json({
      statusCode: 409,
      error: err.errors[0].type,
      message: err.errors[0].message,
    });
  }
  next();
};

export { handleErrorSql };
