import { Injectable } from '@nestjs/common';
import { CreateMedicaoPneuDto } from './dto/create-medicao_pneus.dto';
import { UpdateMedicaoPneuDto } from './dto/update-medicao_pneus.dto';
import { SupabaseService } from '../supabase/supabase.service';
import { MedicaoPneu } from './entities/medicao_pneu.entity';
import { BaseCrudService } from '../supabase/base-crud.service';

@Injectable()
export class MedicaoPneusService extends BaseCrudService<MedicaoPneu> {
  protected table = 'medicao_pneu';
  protected singularResource = 'a medição de pneu';
  protected pluralResource = 'as medições de pneus';

  constructor(protected readonly supabase: SupabaseService) {
    super(supabase);
  }

  override create(dto: CreateMedicaoPneuDto): Promise<MedicaoPneu> {
    return super.create(dto);
  }

  override update(id: number, dto: UpdateMedicaoPneuDto): Promise<MedicaoPneu> {
    return super.update(id, dto);
  }
}
