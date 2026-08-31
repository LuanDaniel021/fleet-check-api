import { Injectable } from '@nestjs/common';
import { CreateMotoristaDto } from './dto/create-motorista.dto';
import { UpdateMotoristaDto } from './dto/update-motorista.dto';
import { SupabaseService } from '../supabase/supabase.service';
import { Motorista } from './entities/motorista.entity';
import { BaseCrudService } from '../supabase/base-crud.service';

@Injectable()
export class MotoristasService extends BaseCrudService<Motorista> {
  protected table = 'motorista';
  protected singularResource = 'o motorista';
  protected pluralResource = 'os motoristas';

  constructor(protected readonly supabase: SupabaseService) {
    super(supabase);
  }

  override create(dto: CreateMotoristaDto): Promise<Motorista> {
    return super.create(dto);
  }

  override update(id: number, dto: UpdateMotoristaDto): Promise<Motorista> {
    return super.update(id, dto);
  }
}
