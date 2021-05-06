import { graphql } from "graphql"
import { createSchema } from "src/utils/createSchema"


interface Options{
    source: string;
}
export const gcall = async({source}:Options) => {
    return graphql({
        schema: await createSchema(),
        source 
    })
}