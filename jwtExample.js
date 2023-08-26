import jwt from "jsonwebtoken";

//esta es una clave secreta que nadie debe tener, solo el backend
//debe ser una variable de ambiente
const secret = "holi";

const paylod = {
  sub: 1, // este debe ser el identificador del usuario
  //puedo agregar los atributos que necesite
  role: "admin",
};

//la funcion que retorla el token
const singToken = (paylod, secret) => {
  return jwt.sing(paylod, secret);
};

const token = singToken(paylod, secret);

console.log(token);

//esta funcion va a retornar la info que se guarda en el token
//le enviamos dos parametrosm el token y la clave secreta
const verifyToken = (token, secret) => {
  return jwt.verify(token, secret);
};

const data = verifyToken(token, secret);

console.log(data);
