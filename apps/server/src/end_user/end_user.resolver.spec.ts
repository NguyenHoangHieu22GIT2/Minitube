import { Test, TestingModule } from '@nestjs/testing';
import { EndUserResolver } from './end_user.resolver';
import { EndUserService } from './end_user.service';

describe('EndUserResolver', () => {
  let resolver: EndUserResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EndUserResolver, EndUserService],
    }).compile();

    resolver = module.get<EndUserResolver>(EndUserResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
