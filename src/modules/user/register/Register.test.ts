import { Connection } from "typeorm";
import { testConn } from "src/test-utils/testConn"
import { graphql } from "graphql";


let conn: Connection;
beforeAll(async () => {
    conn = await testConn();
})

afterAll(async() => {
    await conn.close()
})

describe('Register', () =>{
    it("create User", () => {
        graphql({
            
        })
    })
})