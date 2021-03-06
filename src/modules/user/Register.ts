import {Resolver, Query, Mutation, Arg} from "type-graphql";
import bcrypt  from "bcryptjs";
import { User } from "../../entity/User";
import { RegisterInput } from "./register/RegisterInput";

@Resolver(User)
export class RegisterResolver{
    @Query(() => String)
    async hello(){
        return "Hello World";
    }



    @Mutation(() => String)
    async register(
        @Arg("data"){
            firstName,
            lastName,
            email,
            password
        }: RegisterInput
    ): Promise<User> {
        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword
        }).save();


        return user;   
    }
    
}