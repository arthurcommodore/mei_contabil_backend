import { Injectable } from '@nestjs/common';
import { UserInterface } from './interface/user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import { EmailService } from 'src/api/email/email.service';

@Injectable()
export class UserService {

    constructor(
        @InjectModel("user")
        private readonly userModel: Model<UserInterface>,
        private readonly jwtService: JwtService,
        private readonly emailService: EmailService
    ) {}

    async findByEmail(email: string) {

        try {
            return await this.userModel.findOne({ email}).exec(); 

        }catch(e) {
            
            throw new Error(e);
        }
    }

    async create(data: CreateUserDto) {

        try {
            await this.userModel.create(data);

        }catch(e) {

            throw new Error(e);
        }
    }


    async sendEmailVerify(to: string) {

        try {
            const token = this.jwtService.sign({email: to});
            const result = this.emailService.sendCheckEmail(to, token);
            console.log(result)

        }catch(e) {
            throw new Error(e);
        }
    }
}
