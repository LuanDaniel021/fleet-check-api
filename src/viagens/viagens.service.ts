import { Injectable } from '@nestjs/common';
import { CreateViagemDto } from './dto/create-viagem.dto';
import { UpdateViagemDto } from './dto/update-viagem.dto';
import { SupabaseService } from '../supabase/supabase.service';
import { Viagem } from './entities/viagem.entity';
import { SupabaseCrudService } from '../supabase/supabase-crud.service';

@Injectable()
export class ViagensService extends SupabaseCrudService<
  'viagem',
  Viagem,
  CreateViagemDto,
  UpdateViagemDto
> {
  protected table: 'viagem' = 'viagem';
  protected singularResource = 'a viagem';
  protected pluralResource = 'as viagens';
  protected selectQuery = '*, caminhao(*), motorista(*)';

  constructor(supabase: SupabaseService) {
    super(supabase);
  }
}
