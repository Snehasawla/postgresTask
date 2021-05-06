import {Resolver, Query, Mutation, Arg} from "type-graphql";
import { Post } from "../entity/Post";
import { PostInput } from "./post/postInput";

@Resolver()
export class PostResolver{
    @Query(() => [Post])
    posts(){
        return Post.find()
    }



    @Mutation(() => String)
    async createPost(
        @Arg("data") data: PostInput,)
        : Promise<Post | null>{

        const post = await Post.create(data).save();


        return post;   
    }
    
}