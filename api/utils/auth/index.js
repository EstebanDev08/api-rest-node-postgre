import passport from "passport";
import { localStrategy } from "./strategies/local.strategy.js";

passport.use(localStrategy);

export default passport;
