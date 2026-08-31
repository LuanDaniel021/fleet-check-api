import { Injectable } from '@nestjs/common';
import { CreateManutencaoDto } from './dto/create-manutencao.dto';
import { UpdateManutencaoDto } from './dto/update-manutencao.dto';
import { SupabaseService } from '../supabase/supabase.service';
import { Manutencao } from './entities/manutencao.entity';
import { BaseCrudService } from '../supabase/base-crud.service';

@Injectable()
export class ManutencaoService extends BaseCrudService<
  Manutencao,
  CreateManutencaoDto,
  UpdateManutencaoDto
> {
  protected table = 'manutencao';
  protected singularResource = 'a manutenção';
  protected pluralResource = 'as manutenções';

  constructor(supabase: SupabaseService) {
    super(supabase);
  }
}
