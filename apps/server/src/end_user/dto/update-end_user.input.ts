import { CreateEndUserInput } from './create-end_user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateEndUserInput extends PartialType(CreateEndUserInput) {
  @Field(() => Int)
  id: number;
}
