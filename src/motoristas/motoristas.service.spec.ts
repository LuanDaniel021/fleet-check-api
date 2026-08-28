import { Test, TestingModule } from '@nestjs/testing';
import { MotoristasService } from './motoristas.service';
import { SupabaseService } from '../supabase/supabase.service';

describe('MotoristasService', () => {
  let service: MotoristasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MotoristasService,
        { provide: SupabaseService, useValue: { getClient: jest.fn() } },
      ],
    }).compile();

    service = module.get<MotoristasService>(MotoristasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
