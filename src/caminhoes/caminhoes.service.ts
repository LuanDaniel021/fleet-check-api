import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { Caminhao } from './entities/caminhao.entity';
import { CreateCaminhaoDto } from './dto/create-caminhao.dto';
import { UpdateCaminhaoDto } from './dto/update-caminhao.dto';
import { throwSupabaseError } from '../supabase/supabase-error.util';

@Injectable()
export class CaminhoesService {
  constructor(private readonly supabase: SupabaseService) {}

  async create(dto: CreateCaminhaoDto): Promise<Caminhao> {
    const { data, error } = await this.supabase
      .getClient()
      .from('caminhao')
      .insert(dto)
      .select('*, crlv(*), motorista(*)')
      .single();

    if (error) throwSupabaseError(error, 'o caminhão', 'cadastrar');
    if (!data)
      throw new InternalServerErrorException(
        'O caminhão não foi retornado após o cadastro.',
      );

    return data;
  }

  async findAll(): Promise<Caminhao[]> {
    const { data, error } = await this.supabase
      .getClient()
      .from('caminhao')
      .select('*, crlv(*), motorista(*)');

    if (error) throwSupabaseError(error, 'os caminhões', 'buscar');

    return data || [];
  }

  async findOne(id: number): Promise<Caminhao> {
    const { data, error } = await this.supabase
      .getClient()
      .from('caminhao')
      .select('*, crlv(*), motorista(*)')
      .eq('id', id)
      .single();

    if (error) throwSupabaseError(error, 'o caminhão', 'buscar');

    if (!data) {
      throw new NotFoundException(
        `Caminhão com ID ${id} não pôde ser atualizado.`,
      );
    }

    return data;
  }

  async update(id: number, dto: UpdateCaminhaoDto): Promise<Caminhao> {
    const { data, error } = await this.supabase
      .getClient()
      .from('caminhao')
      .update(dto)
      .eq('id', id)
      .select('*, crlv(*), motorista(*)')
      .single();

    if (error) throwSupabaseError(error, 'o caminhão', 'atualizar');

    if (!data) {
      throw new NotFoundException(
        `Caminhão com ID ${id} não pôde ser atualizado.`,
      );
    }

    return data;
  }

  async remove(id: number): Promise<Caminhao> {
    const { data, error } = await this.supabase
      .getClient()
      .from('caminhao')
      .delete()
      .eq('id', id)
      .select()
      .single();

    if (error) throwSupabaseError(error, 'o caminhão', 'remover');

    if (!data) {
      throw new NotFoundException(
        `Caminhão com ID ${id} não encontrado para remoção.`,
      );
    }

    return data;
  }
}
