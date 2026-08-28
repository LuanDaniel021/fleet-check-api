import { Test, TestingModule } from '@nestjs/testing';
import { MedicaoPneusService } from './medicao_pneus.service';
import { SupabaseService } from '../supabase/supabase.service';

describe('MedicaoPneusService', () => {
  let service: MedicaoPneusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MedicaoPneusService,
        { provide: SupabaseService, useValue: { getClient: jest.fn() } },
      ],
    }).compile();

    service = module.get<MedicaoPneusService>(MedicaoPneusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
