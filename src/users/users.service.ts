import { BadRequestException, Injectable } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { LoginUserDto } from './dto/login-users.dto';
import { CreateUserDto } from './dto/create-users.dto';
import { RegistryResponse } from './interfaces/registry-response.interface';

@Injectable()
export class UsersService {
  constructor(private readonly supabase: SupabaseService) {}

  async login(dto: LoginUserDto): Promise<string> {
    const client = this.supabase.getClient();
    const { data, error } = await client.auth.signInWithPassword({
      email: dto.email,
      password: dto.password,
    });

    if (error) {
      throw error;
    }

    return data.session?.access_token ?? '';
  }

  async registry(dto: CreateUserDto): Promise<RegistryResponse> {
    const client = this.supabase.getClient();
    const { data, error } = await client.auth.signUp({
      email: dto.email,
      password: dto.password,
      options: {
        data: {
          nome: dto.nome,
        },
      },
    });

    if (error) {
      throw new BadRequestException(`Erro ao criar usuário: ${error.message}`);
    }

    return {
      mensagem: 'Usuário cadastrado com sucesso!',
      user: {
        id: data.user?.id,
        email: data.user?.email,
      },
    };
  }
}
