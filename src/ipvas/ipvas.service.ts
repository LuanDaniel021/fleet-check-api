import {
  Injectable,
  BadRequestException,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateIpvaDto } from './dto/create-ipva.dto';
import { UpdateIpvaDto } from './dto/update-ipva.dto';
import { SupabaseService } from '../supabase/supabase.service';
import { Ipva } from './entities/ipva.entity';

@Injectable()
export class IpvasService {
  constructor(private readonly supabase: SupabaseService) {}

  async create(dto: CreateIpvaDto): Promise<Ipva> {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('ipva')
      .insert(dto)
      .select()
      .single();

    if (error || !data) {
      throw new BadRequestException(
        `Falha ao cadastrar ipva: ${error?.message}`,
      );
    }

    return data;
  }

  async findAll(): Promise<Ipva[]> {
    const client = this.supabase.getClient();
    const { data, error } = await client.from('ipva').select();

    if (error) {
      throw new InternalServerErrorException(
        `Erro ao buscar ipvas: ${error.message}`,
      );
    }

    return data;
  }

  async findOne(id: number): Promise<Ipva> {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('ipva')
      .select()
      .eq('id', id)
      .single();

    if (error || !data) {
      throw new NotFoundException(`Ipva com ID ${id} não encontrado.`);
    }

    return data;
  }

  async update(id: number, dto: UpdateIpvaDto): Promise<Ipva> {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('ipva')
      .update(dto)
      .eq('id', id)
      .select()
      .single();

    if (error || !data) {
      throw new Error(`Erro: ${error?.message}`);
    }

    return data;
  }

  async remove(id: number): Promise<Ipva> {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('ipva')
      .delete()
      .eq('id', id)
      .select()
      .single();

    if (error || !data) {
      throw new NotFoundException(
        `Ipva com ID ${id} não encontrado para remoção.`,
      );
    }

    return data;
  }
}
