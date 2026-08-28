import { Test, TestingModule } from '@nestjs/testing';
import { CrlvsService } from './crlvs.service';
import { SupabaseService } from '../supabase/supabase.service';

describe('CrlvsService', () => {
  let service: CrlvsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CrlvsService,
        { provide: SupabaseService, useValue: { getClient: jest.fn() } },
      ],
    }).compile();

    service = module.get<CrlvsService>(CrlvsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
