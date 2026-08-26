import { Injectable } from '@nestjs/common';
import { CreateIpvaDto } from './dto/create-ipva.dto';
import { UpdateIpvaDto } from './dto/update-ipva.dto';
import { Ipva } from './entities/ipva.entity';

@Injectable()
export class IpvasService {
  constructor(private readonly supabase: SupabaseService) {}

  async create(dto: CreateCaminhaoDto): Promise<Ipva> {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('ipvas')
      .insert(dto)
      .select()
      .single();

    if (error || !data) {
      throw new BadRequestException(`Falha ao cadastrar ipva: ${error?.message}`);
    }

    return data as Ipva;
  }

  async findAll(): Promise<Ipva[]> {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('ipva')
      .select();

    if (error) {
      throw new InternalServerErrorException(`Erro ao buscar ipvas: ${error.message}`);
    }

    return data  as Ipva[];
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

    return data as Ipva;
  }

  async update(id: number, dto: UpdateCaminhaoDto): Promise<Ipva> {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('ipva')
      .update(dto)
      .eq('id', id)
      .select()
      .single();

    if (error || !data) {
      throw new NotFoundException(`Ipva com ID ${id} não encontrado ou falha na atualização.`);
    }

    return data as Ipva;
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
      throw new NotFoundException(`Ipva com ID ${id} não encontrado para remoção.`);
    }

    return data as Ipva;
  }

}