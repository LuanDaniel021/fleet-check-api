import { Injectable } from '@nestjs/common';
import { CreateViagemDto } from './dto/create-viagem.dto';
import { UpdateViagemDto } from './dto/update-viagem.dto';
import { SupabaseService } from '../supabase/supabase.service';
import { Viagem } from './entities/viagem.entity';
import { BaseCrudService } from '../supabase/base-crud.service';

@Injectable()
export class ViagensService extends BaseCrudService<Viagem> {
  protected table = 'viagem';
  protected singularResource = 'a viagem';
  protected pluralResource = 'as viagens';
  protected selectQuery = '*, caminhao(*), motorista(*)';

  constructor(protected readonly supabase: SupabaseService) {
    super(supabase);
  }

  override create(dto: CreateViagemDto): Promise<Viagem> {
    return super.create(dto);
  }

  override update(id: number, dto: UpdateViagemDto): Promise<Viagem> {
    return super.update(id, dto);
  }
}
