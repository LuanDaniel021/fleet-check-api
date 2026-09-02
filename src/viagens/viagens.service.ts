import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateViagemDto } from './dto/create-viagem.dto';
import { UpdateViagemDto } from './dto/update-viagem.dto';
import { SupabaseService } from '../supabase/supabase.service';
import { Viagem } from './entities/viagem.entity';
import { throwSupabaseError } from '../supabase/supabase-error.util';

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

    if (error) throwSupabaseError(error, 'a viagem', 'cadastrar');
    if (!data)
      throw new InternalServerErrorException(
        'A viagem não foi retornada após o cadastro.',
      );

    return data;
  }

  async findAll(): Promise<Viagem[]> {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('viagem')
      .select('*, caminhao(*), motorista(*)');

    if (error) throwSupabaseError(error, 'as viagens', 'buscar');

    return data ?? [];
  }

  async findOne(id: number): Promise<Viagem> {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('viagem')
      .select('*, caminhao(*), motorista(*)')
      .eq('id', id)
      .single();

    if (error) throwSupabaseError(error, 'a viagem', 'buscar');

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

    if (error) throwSupabaseError(error, 'a viagem', 'atualizar');

    if (!data) {
      throw new NotFoundException(`Viagem com ID ${id} não encontrada.`);
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

    if (error) throwSupabaseError(error, 'a viagem', 'remover');

    if (!data) {
      throw new NotFoundException(
        `Viagem com ID ${id} não encontrada para remoção.`,
      );
    }

    return data;
  }
}
