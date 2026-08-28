import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreatePneuDto } from './dto/create-pneus.dto';
import { UpdatePneuDto } from './dto/update-pneus.dto';
import { SupabaseService } from '../supabase/supabase.service';
import { Pneu } from './entities/pneu.entity';
import { throwSupabaseError } from '../supabase/supabase-error.util';

@Injectable()
export class PneusService {
  constructor(private readonly supabase: SupabaseService) {}

  async create(dto: CreatePneuDto): Promise<Pneu> {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('pneu')
      .insert(dto)
      .select()
      .single();

    if (error) throwSupabaseError(error, 'o pneu', 'cadastrar');
    if (!data)
      throw new InternalServerErrorException(
        'O pneu não foi retornado após o cadastro.',
      );

    return data;
  }

  async findAll(): Promise<Pneu[]> {
    const client = this.supabase.getClient();
    const { data, error } = await client.from('pneu').select();

    if (error) throwSupabaseError(error, 'os pneus', 'buscar');

    return data ?? [];
  }

  async findOne(id: number): Promise<Pneu> {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('pneu')
      .select()
      .eq('id', id)
      .single();

    if (error) throwSupabaseError(error, 'o pneu', 'buscar');
    if (!data) throw new NotFoundException(`Pneu com ID ${id} não encontrado.`);

    return data;
  }

  async update(id: number, dto: UpdatePneuDto): Promise<Pneu> {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('pneu')
      .update(dto)
      .eq('id', id)
      .select()
      .single();

    if (error) throwSupabaseError(error, 'o pneu', 'atualizar');
    if (!data) throw new NotFoundException(`Pneu com ID ${id} não encontrado.`);

    return data;
  }

  async remove(id: number): Promise<Pneu> {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('pneu')
      .delete()
      .eq('id', id)
      .select()
      .single();

    if (error) throwSupabaseError(error, 'o pneu', 'remover');
    if (!data) {
      throw new NotFoundException(
        `Pneu com ID ${id} não encontrado para remoção.`,
      );
    }

    return data;
  }
}
