import { Body, Controller, Post, Res, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Response } from 'express';
import { CheckEmailDto } from './dto/check-email-user.dto';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Post()
    async create(@Body() data: CreateUserDto, @Res() response: Response) {

        const user = await this.userService.findByEmail(data.email);
        if(user) {
            return response.status(403).json({
                status: "Forbidden",
                message: "User Already exist"
            });
        }

        await this.userService.create(data);

        return response.status(201).json({
            status: "Ok",
            message: "User created"
        });
    }

    @Post("sendEmail")
    async checkEmail(@Body() data: CheckEmailDto, @Res() response: Response) {

        const user = await this.userService.findByEmail(data.email);
        if(!user) {
            return response.status(404).json({
                status: "Not Found",
                message: "There is no registered user with this email"
            });
        }

        await this.userService.sendEmailVerify(data.email);
        return response.status(201).json({
            status: "Ok",
            message: "Email was sent"
        });
    }

    @Get("getVerifyEmail/:email")
    async verifyEmail() {

        
    }
    
}
