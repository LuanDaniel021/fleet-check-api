import { BadRequestException, Injectable } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { LoginUserDto } from './dto/login-users.dto';
import { CreateUserDto } from './dto/create-users.dto';
import { RegistryResponse } from './interfaces/registry-response.interface';
import { UpdateUserDto } from './dto/update-users.dto';
import { UpdateResponse } from './interfaces/update-response.interface';

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
    const { data, error } = await client.auth.admin.createUser({
      email: dto.email,
      password: dto.password,
      user_metadata: {
        nome: dto.nome,
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
        access_token: '',
      },
    };
  }

  async fregistry(dto: CreateUserDto): Promise<RegistryResponse> {
    const client = this.supabase.getClient();
    const { data, error } = await client.auth.admin.createUser({
      email: dto.email,
      password: dto.password,
      user_metadata: {
        nome: dto.nome,
      },
      email_confirm: true,
    });

    if (error) {
      throw new BadRequestException(`Erro ao criar usuário: ${error.message}`);
    }

    return {
      mensagem: 'Usuário cadastrado com sucesso!',
      user: {
        id: data.user?.id,
        email: data.user?.email,
        access_token: '',
      },
    };
  }

  async update(userId: string, dto: UpdateUserDto): Promise<UpdateResponse> {
    const client = this.supabase.getClient();
    const { data, error } = await client.auth.admin.updateUserById(userId, {
      email: dto.email,
      password: dto.password,
      user_metadata: { nome: dto.nome },
    });

    if (error) {
      throw new BadRequestException(
        `Erro ao atualizar dados: ${error.message}`,
      );
    }

    return {
      message: 'Perfil atualizado com sucesso!',
      user: data.user,
    };
  }

  async delete(userId: string) {
    const adminClient = this.supabase.getClient();

    const { error } = await adminClient.auth.admin.deleteUser(userId);

    if (error) {
      throw new BadRequestException(`Erro ao excluir: ${error.message}`);
    }

    return { mensagem: 'Usuário totalmente removido' };
  }
}
