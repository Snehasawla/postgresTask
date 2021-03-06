import {Resolver, Query, Mutation, Arg, Ctx} from "type-graphql";
import bcrypt  from "bcryptjs";
import { User } from "../../entity/User";
import { MyContext } from "../types/MyContext";

@Resolver(User)
export class LoginResolver{
    @Query(() => String)
    async hello(){
        return "Hello World";
    }

    @Mutation(() => String, {nullable: true})
    async login(
        @Arg("email") email: string,
        @Arg("password") password: string,
        @Ctx() ctx:MyContext 
    ): Promise<User | null> {
        const user = await User.findOne({where: { email }});

        if(!user){
            return null
        }

        const valid = await bcrypt.compare(password, user.password);

        if(!valid){
            return null
        }

        ctx.req.session.id = user.id

        return user;   
    }
    
}