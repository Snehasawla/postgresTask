import { Post } from "../../entity/Post";
import { Resolver, Mutation, Arg } from "type-graphql";
import {UpdatePostInput} from "../post/updatePostInput"


@Resolver()
export class UpdatePostResolver{
    @Mutation(() => Post)
    async updatePost(@Arg("data") data: UpdatePostInput): Promise<Post | null>
     {
    const post = await Post.findOne({where: { }});
    if (!post) throw new Error("Post not found!");
    Object.assign(post, data);
    await post.save();
    return post;
}

}

