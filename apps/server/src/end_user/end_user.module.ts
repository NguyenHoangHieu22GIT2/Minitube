import { Module } from '@nestjs/common';
import { EndUserService } from './end_user.service';
import { EndUserResolver } from './end_user.resolver';

@Module({
  providers: [EndUserResolver, EndUserService],
})
export class EndUserModule {}
