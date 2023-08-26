import passport from "passport";
import { localStrategy } from "./strategies/local.strategy.js";
import { jwtStrategy } from "./strategies/jwt.strategy.js";

passport.use(localStrategy);
passport.use(jwtStrategy);

export default passport;
