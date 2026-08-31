import { Injectable } from '@nestjs/common';
import { CreateManutencaoDto } from './dto/create-manutencao.dto';
import { UpdateManutencaoDto } from './dto/update-manutencao.dto';
import { SupabaseService } from '../supabase/supabase.service';
import { Manutencao } from './entities/manutencao.entity';
import { BaseCrudService } from '../supabase/base-crud.service';

@Injectable()
export class ManutencaoService extends BaseCrudService<Manutencao> {
  protected table = 'manutencao';
  protected singularResource = 'a manutenção';
  protected pluralResource = 'as manutenções';

  constructor(protected readonly supabase: SupabaseService) {
    super(supabase);
  }

  override create(dto: CreateManutencaoDto): Promise<Manutencao> {
    return super.create(dto);
  }

  override update(id: number, dto: UpdateManutencaoDto): Promise<Manutencao> {
    return super.update(id, dto);
  }
}
