import { Test, TestingModule } from '@nestjs/testing';
import { CaminhoesService } from './caminhoes.service';
import { SupabaseService } from '../supabase/supabase.service';

describe('CaminhoesService', () => {
  let service: CaminhoesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CaminhoesService,
        { provide: SupabaseService, useValue: { getClient: jest.fn() } },
      ],
    }).compile();

    service = module.get<CaminhoesService>(CaminhoesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
