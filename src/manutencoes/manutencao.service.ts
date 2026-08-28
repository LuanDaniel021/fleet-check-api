import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateManutencaoDto } from './dto/create-manutencao.dto';
import { UpdateManutencaoDto } from './dto/update-manutencao.dto';
import { SupabaseService } from '../supabase/supabase.service';
import { Manutencao } from './entities/manutencao.entity';
import { throwSupabaseError } from '../supabase/supabase-error.util';

@Injectable()
export class ManutencaoService {
  constructor(private readonly supabase: SupabaseService) {}

  async create(dto: CreateManutencaoDto): Promise<Manutencao> {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('manutencao')
      .insert(dto)
      .select()
      .single();

    if (error) throwSupabaseError(error, 'a manutenção', 'cadastrar');
    if (!data)
      throw new InternalServerErrorException(
        'A manutenção não foi retornada após o cadastro.',
      );

    return data;
  }

  async findAll(): Promise<Manutencao[]> {
    const client = this.supabase.getClient();
    const { data, error } = await client.from('manutencao').select();

    if (error) throwSupabaseError(error, 'as manutenções', 'buscar');

    return data ?? [];
  }

  async findOne(id: number): Promise<Manutencao> {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('manutencao')
      .select()
      .eq('id', id)
      .single();

    if (error) throwSupabaseError(error, 'a manutenção', 'buscar');
    if (!data)
      throw new NotFoundException(`Manutenção com ID ${id} não encontrada.`);

    return data;
  }

  async update(id: number, dto: UpdateManutencaoDto): Promise<Manutencao> {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('manutencao')
      .update(dto)
      .eq('id', id)
      .select()
      .single();

    if (error) throwSupabaseError(error, 'a manutenção', 'atualizar');
    if (!data)
      throw new NotFoundException(`Manutenção com ID ${id} não encontrada.`);

    return data;
  }

  async remove(id: number): Promise<Manutencao> {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('manutencao')
      .delete()
      .eq('id', id)
      .select()
      .single();

    if (error) throwSupabaseError(error, 'a manutenção', 'remover');
    if (!data) {
      throw new NotFoundException(
        `Manutenção com ID ${id} não encontrada para remoção.`,
      );
    }

    return data;
  }
}
