import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class EndUser {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
