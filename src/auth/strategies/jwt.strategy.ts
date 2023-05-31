import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt } from "passport-jwt";
import { Strategy } from "passport-jwt";

export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor() {

        super({
            header: "",
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET_KEY,
        });
    }

    validate(payload: any) {

        return {
            id: payload.sub, 
            email: payload.email, 
        }
    }
}