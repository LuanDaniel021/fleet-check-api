import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateIpvaDto } from './dto/create-ipva.dto';
import { UpdateIpvaDto } from './dto/update-ipva.dto';
import { SupabaseService } from '../supabase/supabase.service';
import { Ipva } from './entities/ipva.entity';
import { throwSupabaseError } from '../supabase/supabase-error.util';

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

    if (error) throwSupabaseError(error, 'o IPVA', 'cadastrar');
    if (!data)
      throw new InternalServerErrorException(
        'O IPVA não foi retornado após o cadastro.',
      );

    return data;
  }

  async findAll(): Promise<Ipva[]> {
    const client = this.supabase.getClient();
    const { data, error } = await client.from('ipva').select();

    if (error) throwSupabaseError(error, 'os IPVAs', 'buscar');

    return data ?? [];
  }

  async findOne(id: number): Promise<Ipva> {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('ipva')
      .select()
      .eq('id', id)
      .single();

    if (error) throwSupabaseError(error, 'o IPVA', 'buscar');
    if (!data) throw new NotFoundException(`IPVA com ID ${id} não encontrado.`);

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

    if (error) throwSupabaseError(error, 'o IPVA', 'atualizar');
    if (!data) throw new NotFoundException(`IPVA com ID ${id} não encontrado.`);

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

    if (error) throwSupabaseError(error, 'o IPVA', 'remover');
    if (!data) {
      throw new NotFoundException(
        `IPVA com ID ${id} não encontrado para remoção.`,
      );
    }

    return data;
  }
}
