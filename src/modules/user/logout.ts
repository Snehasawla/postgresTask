import {Resolver, Mutation, Ctx} from "type-graphql";
import { User } from "../../entity/User";
import { MyContext } from "../types/MyContext";

@Resolver(User)
export class LogoutResolver{

    @Mutation(() => String, {nullable: true})
    async logout(@Ctx() ctx:MyContext ): Promise<Boolean>{
        return new Promise((res, rej) =>
        ctx.req.session.destroy(err => {
            if(err){
                console.log(err);
                return rej(false);
            }

            //ctx.res.clearCookie("qid");
            return res(true);

        })
        );  
    }
    
}