import { Field} from "type-graphql";
import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {User} from '../../src/entity/User'

@Entity()
export class Post extends BaseEntity{
  @Field()
  @PrimaryGeneratedColumn()
  titile: string;

  @Field()
  @Column(_type => User)
  by: User;

}