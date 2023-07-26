import bcrypt from "bcrypt";

const encryptData = async (data) => {
  // esta funcion (bcrypt.hash())nos devuelbe un valor encriptado, recibe dos parametros
  // el dato a enciptar y el numero de veces que lo hara
  const encryptedData = await bcrypt.hash(data, 10);

  return encryptedData;
};

const verifyData = async (unencryptedData, encryptedData) => {
  //esta duncion (bcrypt.compare()) recibe dos parametro
  //el dato original y el encriptado
  //lo que hace es devolver true o false dependiendo
  //si el dato y el has coinciden
  const isMatch = await bcrypt.compare(unencryptedData, encryptedData);
  return isMatch;
};

export { encryptData, verifyData };
