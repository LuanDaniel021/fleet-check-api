import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateCrlvDto } from './dto/create-crlv.dto';
import { UpdateCrlvDto } from './dto/update-crlv.dto';
import { SupabaseService } from '../supabase/supabase.service';
import { Crlv } from './entities/crlv.entity';
import { throwSupabaseError } from '../supabase/supabase-error.util';

@Injectable()
export class CrlvsService {
  constructor(private readonly supabase: SupabaseService) {}

  async create(dto: CreateCrlvDto): Promise<Crlv> {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('crlv')
      .insert(dto)
      .select()
      .single();

    if (error) throwSupabaseError(error, 'o CRLV', 'cadastrar');

    if (!data) {
      throw new InternalServerErrorException(
        'O CRLV não foi retornado após o cadastro.',
      );
    }

    return data;
  }

  async findAll(): Promise<Crlv[]> {
    const client = this.supabase.getClient();
    const { data, error } = await client.from('crlv').select();

    if (error) throwSupabaseError(error, 'os CRLVs', 'buscar');

    return data ?? [];
  }

  async findOne(id: number): Promise<Crlv> {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('crlv')
      .select()
      .eq('id', id)
      .single();

    if (error) throwSupabaseError(error, 'o CRLV', 'buscar');
    if (!data) throw new NotFoundException(`CRLV com ID ${id} não encontrado.`);

    return data;
  }

  async update(id: number, dto: UpdateCrlvDto): Promise<Crlv> {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('crlv')
      .update(dto)
      .eq('id', id)
      .select()
      .single();

    if (error) throwSupabaseError(error, 'o CRLV', 'atualizar');
    if (!data) throw new NotFoundException(`CRLV com ID ${id} não encontrado.`);

    return data;
  }

  async remove(id: number): Promise<Crlv> {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('crlv')
      .delete()
      .eq('id', id)
      .select()
      .single();

    if (error) throwSupabaseError(error, 'o CRLV', 'remover');
    if (!data) {
      throw new NotFoundException(
        `CRLV com ID ${id} não encontrado para remoção.`,
      );
    }

    return data;
  }
}
