import { Injectable } from '@nestjs/common';
import { CreateEndUserInput } from './dto/create-end_user.input';
import { UpdateEndUserInput } from './dto/update-end_user.input';

@Injectable()
export class EndUserService {
  create(createEndUserInput: CreateEndUserInput) {
    return 'This action adds a new endUser';
  }

  findAll() {
    return `This action returns all endUser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} endUser`;
  }

  update(id: number, updateEndUserInput: UpdateEndUserInput) {
    return `This action updates a #${id} endUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} endUser`;
  }
}
