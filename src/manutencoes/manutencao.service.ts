import {
  Injectable,
  BadRequestException,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateManutencaoDto } from './dto/create-manutencao.dto';
import { UpdateManutencaoDto } from './dto/update-manutencao.dto';
import { SupabaseService } from '../supabase/supabase.service';
import { Manutencao } from './entities/manutencao.entity';
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

    if (error || !data) {
      throw new BadRequestException(`Falha ao cadastrar manutenção: ${error?.message}`);
    }

    return data as Manutencao;
  }

  async findAll(): Promise<Manutencao[]> {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('manutencao')
      .select();

    if (error) {
      throw new InternalServerErrorException(`Erro ao buscar manutenções: ${error.message}`);
    }

    return data  as Manutencao[];
  }

  async findOne(id: number): Promise<Manutencao> {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('manutencao')
      .select()
      .eq('id', id)
      .single();

    if (error || !data) {
      throw new NotFoundException(`Manutenção com ID ${id} não encontrada.`);
    }

    return data as Manutencao;
  }

  async update(id: number, dto: UpdateManutencaoDto): Promise<Manutencao> {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('manutencao')
      .update(dto)
      .eq('id', id)
      .select()
      .single();

    if (error || !data) {
      throw new Error(`Erro: ${error.message}`);
    }

    return data as Manutencao;
  }

  async remove(id: number): Promise<Manutencao> {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('manutencao')
      .delete()
      .eq('id', id)
      .select()
      .single();

    if (error || !data) {
      throw new NotFoundException(`Manutenção com ID ${id} não encontrada para remoção.`);
    }

    return data as Manutencao;
  }

}
