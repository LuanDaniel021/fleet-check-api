import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { SupabaseService } from '../supabase/supabase.service';

describe('UsersService', () => {
  let service: UsersService;
  const getClient = jest.fn();

  beforeEach(async () => {
    getClient.mockReset();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: SupabaseService,
          useValue: {
            getClient,
          },
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('confirms the email when registering a user', async () => {
    const createUser = jest.fn().mockResolvedValue({
      data: { user: { id: 'user-id', email: 'usuario@email.com' } },
      error: null,
    });
    getClient.mockReturnValue({ auth: { admin: { createUser } } });

    await service.registry({
      nome: 'José Silva',
      email: 'usuario@email.com',
      password: '12345678',
    });

    expect(createUser).toHaveBeenCalledWith({
      email: 'usuario@email.com',
      password: '12345678',
      email_confirm: true,
      user_metadata: { nome: 'José Silva' },
    });
  });
});
