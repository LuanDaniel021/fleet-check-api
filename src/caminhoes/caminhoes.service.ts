import {
  Injectable,
  BadRequestException,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateCaminhaoDto } from './dto/create-caminhao.dto';
import { UpdateCaminhaoDto } from './dto/update-caminhao.dto';
import { SupabaseService } from '../supabase/supabase.service';
import { Caminhao } from './entities/caminhao.entity';

@Injectable()
export class CaminhoesService {
  constructor(private readonly supabase: SupabaseService) {}

  async teste(): Promise<string> {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .rpc<string>('query_now');
    
    if (error) {
      throw new BadRequestException(error.message);
    }

    return data;
  }

  async create(dto: CreateCaminhaoDto): Promise<Caminhao> {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('caminhao')
      .insert(dto)
      .select()
      .single();

    if (error || !data) {
      throw new BadRequestException(`Falha ao cadastrar caminhão: ${error?.message}`);
    }

    return data as Caminhao;
  }

  async findAll(): Promise<Caminhao[]> {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('caminhao')
      .select('*, crlv(*), motorista(*)');

    if (error) {
      throw new InternalServerErrorException(`Erro ao buscar caminhões: ${error.message}`);
    }

    return (data ?? []) as Caminhao[];
  }

  async findOne(id: number): Promise<Caminhao> {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('caminhao')
      .select('*, crlv(*), motorista(*)')
      .eq('id', id)
      .single();

    if (error || !data) {
      throw new NotFoundException(`Caminhão com ID ${id} não encontrado.`);
    }

    return data as Caminhao;
  }

  async update(id: number, dto: UpdateCaminhaoDto): Promise<Caminhao> {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('caminhao')
      .update(dto)
      .eq('id', id)
      .select('*')
      .single();
      
      //console.log(id)
      
    if (error || !data) {
      throw new Error(`Erro: ${error?.message}`);
    }

    return data as Caminhao;
  }

  async remove(id: number): Promise<Caminhao> {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('caminhao')
      .delete()
      .eq('id', id)
      .select()
      .single();

    if (error || !data) {
      throw new NotFoundException(`Caminhão com ID ${id} não encontrado para remoção.`);
    }

    return data as Caminhao;
  }

}
