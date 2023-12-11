import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";

export class CreateUserDTO {
    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsNotEmpty()
    @IsStrongPassword()
    password: string
}