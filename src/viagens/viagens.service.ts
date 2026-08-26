import {
  Injectable,
  BadRequestException,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateViagemDto } from './dto/create-viagem.dto';
import { UpdateViagemDto } from './dto/update-viagen.dto';
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
      .select()
      .single();

    if (error || !data) {
      throw new BadRequestException(`Falha ao cadastrar viagem: ${error?.message}`);
    }

    return data as Viagem;
  }

  async findAll(): Promise<Viagem[]> {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('viagem')
      .select();

    if (error) {
      throw new InternalServerErrorException(`Erro ao buscar viagens: ${error.message}`);
    }

    return (data ?? []) as Viagem[];
  }

  async findOne(id: number): Promise<Viagem> {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('viagem')
      .select()
      .eq('id', id)
      .single();

    if (error || !data) {
      throw new NotFoundException(`Viagem com ID ${id} não encontrada.`);
    }

    return data as Viagem;
  }

  async update(id: number, dto: UpdateViagemDto): Promise<Viagem> {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('viagem')
      .update(dto)
      .eq('id', id)
      .select()
      .single();

    if (error || !data) {
      throw new Error(`Error: ${error.message}.`);
    }

    return data as Viagem;
  }

  async remove(id: number): Promise<Viagem> {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('viagem')
      .delete()
      .eq('id', id)
      .select()
      .single();

    if (error || !data) {
      throw new NotFoundException(`Viagem com ID ${id} não encontrada para remoção.`);
    }

    return data as Viagem;
  }
}
