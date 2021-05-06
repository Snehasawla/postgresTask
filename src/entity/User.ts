import { Field, ObjectType, ID } from "type-graphql";
import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@ObjectType()
@Entity()
export class User extends BaseEntity{
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field()
  @Column()
  firstName: string;

  @Field()
  @Column()
  lastName: string;

  @Column()
  password: string;

  @Field()
  @Column("text", {unique: true})
  email: string;
}