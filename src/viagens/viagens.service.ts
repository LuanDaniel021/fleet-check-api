import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { CreateViagemDto } from './dto/create-viagem.dto';
import { UpdateViagemDto } from './dto/update-viagem.dto';
import { SupabaseService } from '../supabase/supabase.service';
import { Viagem } from './entities/viagem.entity';

@Injectable()
export class ViagensService {
  constructor(private readonly supabase: SupabaseService) {}

  async create(dto: CreateViagemDto): Promise<Viagem> {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('viagem')
      .insert(dto)
      .select('*, caminhao(*), motorista(*)')
      .single();

    if (error) throw error;

    return data;
  }

  async findAll(): Promise<Viagem[]> {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('viagem')
      .select('*, caminhao(*), motorista(*)');

    if (error) throw error;

    return data || [];
  }

  async findOne(id: number): Promise<Viagem> {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('viagem')
      .select('*, caminhao(*), motorista(*)')
      .eq('id', id)
      .single();

    if (error) throw error;

    if (!data) {
      throw new NotFoundException(`Viagem com ID ${id} não encontrada.`);
    }

    return data;
  }

  async update(id: number, dto: UpdateViagemDto): Promise<Viagem> {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('viagem')
      .update(dto)
      .eq('id', id)
      .select('*, caminhao(*), motorista(*)')
      .single();

    if (error) throw error;

    if (!data) {
      throw new BadRequestException(`Falha ao atualizar viagem com ID ${id}.`);
    }

    return data;
  }

  async remove(id: number): Promise<Viagem> {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('viagem')
      .delete()
      .eq('id', id)
      .select('*, caminhao(*), motorista(*)')
      .single();

    if (error) throw error;

    return data;
  }
}
