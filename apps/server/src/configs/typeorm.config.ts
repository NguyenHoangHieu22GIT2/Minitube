import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmConfig implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    return {
      type: this.configService.get<'postgres'>('db_type'),
      host: this.configService.get<string>('db_host'),
      port: parseInt(this.configService.get<string>('db_port')),
      username: this.configService.get<string>('db_username'),
      password: this.configService.get<string>('db_password'),
      entities: [],
      database: 'minitube',
      synchronize: true,
      logging: true,
    };
  }
}
