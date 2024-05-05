import { DynamicModule, Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestController } from './test.controller';

@Module({})
export class TestModule {
  static register(): DynamicModule {
    return {
      module: TestModule,
      controllers: [TestController],
      providers: [TestService],
    };
  }
}
