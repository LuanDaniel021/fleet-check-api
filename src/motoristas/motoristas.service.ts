import {
  Injectable,
  BadRequestException,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateMotoristaDto } from './dto/create-motorista.dto';
import { UpdateMotoristaDto } from './dto/update-motorista.dto';
import { SupabaseService } from '../supabase/supabase.service';
import { Motorista } from './entities/motorista.entity';

@Injectable()
export class MotoristasService {
  constructor(private readonly supabase: SupabaseService) {}

  async create(dto: CreateMotoristaDto): Promise<Motorista> {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('motorista')
      .insert(dto)
      .select()
      .single();

    if (error || !data) {
      throw new BadRequestException(
        `Falha ao cadastrar motorista: ${error?.message}`,
      );
    }

    return data;
  }

  async findAll(): Promise<Motorista[]> {
    const client = this.supabase.getClient();
    const { data, error } = await client.from('motorista').select();

    if (error) {
      throw new InternalServerErrorException(
        `Erro ao buscar motoristas: ${error.message}`,
      );
    }

    return data;
  }

  async findOne(id: number): Promise<Motorista> {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('motorista')
      .select()
      .eq('id', id)
      .single();

    if (error || !data) {
      throw new NotFoundException(`Motorista com ID ${id} não encontrado.`);
    }

    return data;
  }

  async update(id: number, dto: UpdateMotoristaDto): Promise<Motorista> {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('motorista')
      .update(dto)
      .eq('id', id)
      .select()
      .single();

    if (error || !data) {
      throw new Error(`Erro: ${error?.message}`);
    }

    return data;
  }

  async remove(id: number): Promise<Motorista> {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('motorista')
      .delete()
      .eq('id', id)
      .select()
      .single();

    if (error || !data) {
      throw new NotFoundException(
        `Motorista com ID ${id} não encontrado para remoção.`,
      );
    }

    return data;
  }
}
