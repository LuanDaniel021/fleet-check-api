import { Injectable } from '@nestjs/common';
import { CreateManutencaoDto } from './dto/create-manutencao.dto';
import { UpdateManutencaoDto } from './dto/update-manutencao.dto';
import { SupabaseService } from '../supabase/supabase.service';
import { Manutencao } from './entities/manutencao.entity';
import { SupabaseCrudService } from '../supabase/supabase-crud.service';

@Injectable()
export class ManutencaoService extends SupabaseCrudService<
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
