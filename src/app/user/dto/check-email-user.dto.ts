import { IsNotEmpty, IsString, IsEmail } from "class-validator";

export class CheckEmailDto {

    @IsNotEmpty()
    @IsEmail()
    email: string;
}