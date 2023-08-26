import { Strategy } from "passport-local";
import { verifyData } from "../../encryp_data.js";
import { authService } from "../../../services/auth.service.js";
import boom from "@hapi/boom";

//iniciamos una nueva instancia de laestrategia que vamos a usar

//recibe diferentes parametros, el primero son unas configuraciones que veemos mas adelante
//la segunda es un afuncion donde estara la logica de autenticacion la cual recive tres parametros,
const { boomError } = boom;
const localStrategy = new Strategy(
  { usernameField: "email" },
  async (email, password, done) => {
    try {
      const service = new authService();
      //obtenemos el usurio por email
      const { data } = await service.findByEmail(email);

      //si no existe mandamos el error y decimos que no se completo
      if (!data) {
        throw new Error("email not found");
      }

      //verificamos si el password de la db y la que manda el user es la misma
      const isMatch = await verifyData(password, data.password);

      if (!isMatch) {
        throw new Error("password incorrect");
      }

      //borramos las password pra no mostrarla
      delete data.dataValues.password;

      //enviamos la data como respuesta

      done(null, data);
    } catch (error) {
      done(error, false);
    }
  }
);

export { localStrategy };
