import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  ThrottlerModuleOptions,
  ThrottlerOptionsFactory,
} from '@nestjs/throttler';

@Injectable()
export class ThrottlerConfig implements ThrottlerOptionsFactory {
  constructor(private readonly configService: ConfigService) {}
  createThrottlerOptions():
    | ThrottlerModuleOptions
    | Promise<ThrottlerModuleOptions> {
    return {
      throttlers: [
        {
          ttl: this.configService.get<number>('throttler_ttl'),
          limit: this.configService.get<number>('throttler_limit'),
        },
      ],
    };
  }
}
