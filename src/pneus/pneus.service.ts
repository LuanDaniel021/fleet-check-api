import { Injectable } from '@nestjs/common';
import { CreatePneuDto } from './dto/create-pneus.dto';
import { UpdatePneuDto } from './dto/update-pneus.dto';
import { SupabaseService } from '../supabase/supabase.service';
import { Pneu } from './entities/pneu.entity';
import { BaseCrudService } from '../supabase/base-crud.service';

@Injectable()
export class PneusService extends BaseCrudService<Pneu, CreatePneuDto, UpdatePneuDto> {
  protected table = 'pneu';
  protected singularResource = 'o pneu';
  protected pluralResource = 'os pneus';

  constructor(supabase: SupabaseService) {
    super(supabase);
  }
}
