import { Test, TestingModule } from '@nestjs/testing';
import { ViagensService } from './viagens.service';
import { SupabaseService } from '../supabase/supabase.service';

describe('ViagensService', () => {
  let service: ViagensService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ViagensService,
        { provide: SupabaseService, useValue: { getClient: jest.fn() } },
      ],
    }).compile();

    service = module.get<ViagensService>(ViagensService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
