import { Injectable } from '@nestjs/common';
import { CreateMotoristaDto } from './dto/create-motorista.dto';
import { UpdateMotoristaDto } from './dto/update-motorista.dto';
import { SupabaseService } from '../supabase/supabase.service';
import { Motorista } from './entities/motorista.entity';
import { SupabaseCrudService } from '../supabase/supabase-crud.service';

@Injectable()
export class MotoristasService extends SupabaseCrudService<
  Motorista,
  CreateMotoristaDto,
  UpdateMotoristaDto
> {
  protected table = 'motorista';
  protected singularResource = 'o motorista';
  protected pluralResource = 'os motoristas';

  constructor(supabase: SupabaseService) {
    super(supabase);
  }
}
