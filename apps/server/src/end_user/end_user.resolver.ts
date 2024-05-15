import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EndUserService } from './end_user.service';
import { EndUser } from './entities/end_user.entity';
import { CreateEndUserInput } from './dto/create-end_user.input';
import { UpdateEndUserInput } from './dto/update-end_user.input';

@Resolver(() => EndUser)
export class EndUserResolver {
  constructor(private readonly endUserService: EndUserService) {}

  @Mutation(() => EndUser)
  createEndUser(
    @Args('createEndUserInput') createEndUserInput: CreateEndUserInput,
  ) {
    return this.endUserService.create(createEndUserInput);
  }

  @Query(() => [EndUser], { name: 'endUser' })
  findAll() {
    return this.endUserService.findAll();
  }

  @Query(() => EndUser, { name: 'endUser' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.endUserService.findOne(id);
  }

  @Mutation(() => EndUser)
  updateEndUser(
    @Args('updateEndUserInput') updateEndUserInput: UpdateEndUserInput,
  ) {
    return this.endUserService.update(
      updateEndUserInput.id,
      updateEndUserInput,
    );
  }

  @Mutation(() => EndUser)
  removeEndUser(@Args('id', { type: () => Int }) id: number) {
    return this.endUserService.remove(id);
  }
}
