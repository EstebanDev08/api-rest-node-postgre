import jwt from "jsonwebtoken";
import { config } from "../config/config.js";

//la funcion que retorla el token
const singToken = (paylod) => {
  return jwt.sign(paylod, config.keyJwt);
};

//esta funcion va a retornar la info que se guarda en el token
//le enviamos dos parametrosm el token y la clave secreta
const verifyToken = (token) => {
  return jwt.verify(token, config.keyJwt);
};

export { singToken, verifyToken };
