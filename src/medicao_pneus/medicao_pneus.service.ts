import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateMedicaoPneuDto } from './dto/create-medicao_pneus.dto';
import { UpdateMedicaoPneuDto } from './dto/update-medicao_pneus.dto';
import { SupabaseService } from '../supabase/supabase.service';
import { MedicaoPneu } from './entities/medicao_pneu.entity';
import { throwSupabaseError } from '../supabase/supabase-error.util';

@Injectable()
export class MedicaoPneusService {
  constructor(private readonly supabase: SupabaseService) {}

  async create(dto: CreateMedicaoPneuDto): Promise<MedicaoPneu> {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('medicao_pneu')
      .insert(dto)
      .select()
      .single();

    if (error) throwSupabaseError(error, 'a medição de pneu', 'cadastrar');
    if (!data)
      throw new InternalServerErrorException(
        'A medição de pneu não foi retornada após o cadastro.',
      );

    return data;
  }

  async findAll(): Promise<MedicaoPneu[]> {
    const client = this.supabase.getClient();
    const { data, error } = await client.from('medicao_pneu').select();

    if (error) throwSupabaseError(error, 'as medições de pneus', 'buscar');

    return data ?? [];
  }

  async findOne(id: number): Promise<MedicaoPneu> {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('medicao_pneu')
      .select()
      .eq('id', id)
      .single();

    if (error) throwSupabaseError(error, 'a medição de pneu', 'buscar');
    if (!data)
      throw new NotFoundException(
        `Medição de pneu com ID ${id} não encontrada.`,
      );

    return data;
  }

  async update(id: number, dto: UpdateMedicaoPneuDto): Promise<MedicaoPneu> {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('medicao_pneu')
      .update(dto)
      .eq('id', id)
      .select()
      .single();

    if (error) throwSupabaseError(error, 'a medição de pneu', 'atualizar');
    if (!data)
      throw new NotFoundException(
        `Medição de pneu com ID ${id} não encontrada.`,
      );

    return data;
  }

  async remove(id: number): Promise<MedicaoPneu> {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('medicao_pneu')
      .delete()
      .eq('id', id)
      .select()
      .single();

    if (error) throwSupabaseError(error, 'a medição de pneu', 'remover');
    if (!data) {
      throw new NotFoundException(
        `Medição de pneu com ID ${id} não encontrada para remoção.`,
      );
    }

    return data;
  }
}
