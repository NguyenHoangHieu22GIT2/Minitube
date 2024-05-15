import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EndUserModule } from './end_user/end_user.module';
@Module({
  imports: [EndUserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
