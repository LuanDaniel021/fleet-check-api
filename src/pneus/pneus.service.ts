import { Injectable } from '@nestjs/common';
import { CreatePneuDto } from './dto/create-pneus.dto';
import { UpdatePneuDto } from './dto/update-pneus.dto';
import { SupabaseService } from '../supabase/supabase.service';
import { Pneu } from './entities/pneu.entity';
import { BaseCrudService } from '../supabase/base-crud.service';

@Injectable()
export class PneusService extends BaseCrudService<Pneu> {
  protected table = 'pneu';
  protected singularResource = 'o pneu';
  protected pluralResource = 'os pneus';

  constructor(protected readonly supabase: SupabaseService) {
    super(supabase);
  }

  override create(dto: CreatePneuDto): Promise<Pneu> {
    return super.create(dto);
  }

  override update(id: number, dto: UpdatePneuDto): Promise<Pneu> {
    return super.update(id, dto);
  }
}
