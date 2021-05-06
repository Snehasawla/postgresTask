import {Resolver, Query, Ctx} from "type-graphql";
import { User } from "../src/entity/User";
import { MyContext } from "./modules/types/MyContext";

@Resolver(User)
export class MeResolver{
    @Query(() => User, {nullable: true})
    async me(@Ctx() ctx: MyContext){
        if(!ctx.req.session.id){
            return null
        };

        return User.findOne(ctx.req.session.id);
    }

    
}