import { Test, TestingModule } from '@nestjs/testing';
import { IpvasService } from './ipvas.service';
import { SupabaseService } from '../supabase/supabase.service';

describe('IpvasService', () => {
  let service: IpvasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        IpvasService,
        { provide: SupabaseService, useValue: { getClient: jest.fn() } },
      ],
    }).compile();

    service = module.get<IpvasService>(IpvasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
