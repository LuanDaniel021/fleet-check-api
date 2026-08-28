import { Test, TestingModule } from '@nestjs/testing';
import { PneusService } from './pneus.service';
import { SupabaseService } from '../supabase/supabase.service';

describe('PneusService', () => {
  let service: PneusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PneusService,
        { provide: SupabaseService, useValue: { getClient: jest.fn() } },
      ],
    }).compile();

    service = module.get<PneusService>(PneusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
