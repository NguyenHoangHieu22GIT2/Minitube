import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GqlModuleOptions, GqlOptionsFactory } from '@nestjs/graphql';
import { join } from 'path';

@Injectable()
export class GraphqlConfig implements GqlOptionsFactory {
  constructor(private readonly configService: ConfigService) {}
  createGqlOptions():
    | Omit<GqlModuleOptions<any>, 'driver'>
    | Promise<Omit<GqlModuleOptions<any>, 'driver'>> {
    return {
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      cors: {
        credential: true,
        origin: true,
      },
    };
  }
}
