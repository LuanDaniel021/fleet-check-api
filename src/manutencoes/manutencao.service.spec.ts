import { Test, TestingModule } from '@nestjs/testing';
import { ManutencaoService } from './manutencao.service';
import { SupabaseService } from '../supabase/supabase.service';

describe('ManutencaoService', () => {
  let service: ManutencaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ManutencaoService,
        { provide: SupabaseService, useValue: { getClient: jest.fn() } },
      ],
    }).compile();

    service = module.get<ManutencaoService>(ManutencaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
