import { Strategy, ExtractJwt } from "passport-jwt";
import { config } from "../../../config/config.js";

const key = config.keyJwt;
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: key,
};

const jwtStrategy = new Strategy(options, (payload, done) => {
  return done(null, payload);
});

export { jwtStrategy };
