import { Post } from "../../entity/Post";
import { Resolver, Mutation, Arg } from "type-graphql";


@Resolver()
export class DeletePostResolver{
    @Mutation(() => Boolean)
    async deletePost(@Arg("id") id: string) {
   const post = await Post.findOne({ where: { id } });
   if (!post) throw new Error("post not found!");
   await post.remove();
   return true;
}

}

