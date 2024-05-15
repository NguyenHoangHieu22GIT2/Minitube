import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateEndUserInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
