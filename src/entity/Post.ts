import { Field, ObjectType} from "type-graphql";
import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from '../../src/entity/User'

@ObjectType()
@Entity()
export class Post extends BaseEntity{
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;
  @Field()
  @Column()
  body: string;

  @ManyToOne(() => User, user => user.post)
  user: User;

}