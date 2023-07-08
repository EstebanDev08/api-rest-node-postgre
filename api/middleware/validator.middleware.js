import { badRequest } from "@hapi/boom";
import e from "cors";
// tiene que ser dinámico
const validatorHandler = (schema, property) => {
  //clousures
  return (req, res, next) => {
    const data = req[property]; // puede venir en body, params, o query
    const { error } = schema.validate(data, { abortEarly: false }); // para que envíe todos los errores juntos
    if (error) {
      next(badRequest(error));

      res.status(409).json({
        error: badRequest(error).message,
      });
    }
    next(); //si no hay error sigue fresco tranquilo
  };
};

export { validatorHandler };
