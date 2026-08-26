import { Test, TestingModule } from '@nestjs/testing';
import { CrlvsService } from './crlvs.service';

describe('CrlvsService', () => {
  let service: CrlvsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrlvsService],
    }).compile();

    service = module.get<CrlvsService>(CrlvsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
