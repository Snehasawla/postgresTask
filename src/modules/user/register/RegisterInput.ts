import { IsEmail} from "class-validator";
import {Field, InputType} from "type-graphql";
import { IsEmailAlreadyExist } from "./isEmailAlreadyExist";

@InputType()
export class RegisterInput {
    @Field() 
    firstName:string;

    @Field()
    lastName:string;

    @Field()
    @IsEmail()
    @IsEmailAlreadyExist({message:"email Exist"})
    email: string;

    @Field() 
    password: string

}