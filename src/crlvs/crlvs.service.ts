import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateCrlvDto } from './dto/create-crlv.dto';
import { UpdateCrlvDto } from './dto/update-crlv.dto';
import { SupabaseService } from '../supabase/supabase.service';
import { Crlv } from './entities/crlv.entity';

@Injectable()
export class CrlvsService {
  constructor(private readonly supabase: SupabaseService) { }

  async create(dto: CreateCrlvDto): Promise<Crlv> {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('crlv')
      .insert(dto)
      .select()
      .single()

    if (error) {
      throw new BadRequestException(`Falha ao cadastrar crlv: ${error?.message}`);
    }

    return data as Crlv;
  }

  async findAll(): Promise<Crlv[]> {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('crlv')
      .select();

    if (error) {
      throw new InternalServerErrorException(`Erro ao buscar crlv: ${error.message}`);
    }

    return data as Crlv[];
  }

  async findOne(id: number): Promise<Crlv> {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('crlv')
      .select()
      .eq('id', id)
      .single();

    if (error || !data) {
      throw new NotFoundException(`Crlv com ID ${id} não encontrado.`);
    }

    return data as Crlv;
  }

  async update(id: number, dto: UpdateCrlvDto): Promise<Crlv> {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('crlv')
      .update(dto)
      .eq('id', id)
      .select()
      .single();

    if (error || !data) {
      throw new Error(`Erro: ${error.message}`);
    }

    return data as Crlv;
  }

  async remove(id: number): Promise<Crlv> {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('crlv')
      .delete()
      .eq('id', id)
      .select()
      .single();

    if (error || !data) {
      throw new NotFoundException(`Crlv com ID ${id} não encontrado para remoção.`);
    }

    return data as Crlv;
  }

}
