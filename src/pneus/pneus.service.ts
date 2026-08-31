import { Injectable } from '@nestjs/common';
import { CreatePneuDto } from './dto/create-pneu.dto';
import { UpdatePneuDto } from './dto/update-pneu.dto';
import { SupabaseService } from '../supabase/supabase.service';
import { Pneu } from './entities/pneu.entity';
import { SupabaseCrudService } from '../supabase/supabase-crud.service';

@Injectable()
export class PneusService extends SupabaseCrudService<
  Pneu,
  CreatePneuDto,
  UpdatePneuDto
> {
  protected table = 'pneu';
  protected singularResource = 'o pneu';
  protected pluralResource = 'os pneus';

  constructor(supabase: SupabaseService) {
    super(supabase);
  }
}
