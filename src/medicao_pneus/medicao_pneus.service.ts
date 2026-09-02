import { Injectable } from '@nestjs/common';
import { CreateMedicaoPneuDto } from './dto/create-medicao_pneu.dto';
import { UpdateMedicaoPneuDto } from './dto/update-medicao_pneu.dto';
import { SupabaseService } from '../supabase/supabase.service';
import { MedicaoPneu } from './entities/medicao_pneu.entity';
import { SupabaseCrudService } from '../supabase/supabase-crud.service';

@Injectable()
export class MedicaoPneusService extends SupabaseCrudService<
  'medicao_pneu',
  MedicaoPneu,
  CreateMedicaoPneuDto,
  UpdateMedicaoPneuDto
> {
  protected table: 'medicao_pneu' = 'medicao_pneu';
  protected singularResource = 'a medição de pneu';
  protected pluralResource = 'as medições de pneus';

  constructor(supabase: SupabaseService) {
    super(supabase);
  }
}
