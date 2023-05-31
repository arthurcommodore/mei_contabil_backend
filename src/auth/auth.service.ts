import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserInterface } from 'src/app/user/interface/user.interface';
import { UserService } from 'src/app/user/user.service';
import { compareSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {

    constructor(private readonly userService: UserService, private readonly jwtService: JwtService) {}

    async login(user: UserInterface) {

        const payload = {
            sub: user.id,
            email: user.email,
        };

        return {
            token: this.jwtService.sign(payload)
        }
    }

    async validateUser(email: string, password: string) {

        let user: UserInterface;
        try {
            user = await this.userService.findByEmail(email);

        } catch (e) {
            throw new Error(e);
        }

        if (!user) {
            throw new UnauthorizedException;
        }

        const isPasswordValid = compareSync(password, user.password);
        if (!isPasswordValid) {
            throw new UnauthorizedException;
        }

        return user;
    }
}
