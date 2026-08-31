import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { BaseCrudService } from '../supabase/base-crud.service';
import { Caminhao } from './entities/caminhao.entity';
import { CreateCaminhaoDto } from './dto/create-caminhao.dto';
import { UpdateCaminhaoDto } from './dto/update-caminhao.dto';

@Injectable()
export class CaminhoesService extends BaseCrudService<Caminhao> {
  protected table = 'caminhao';
  protected singularResource = 'o caminhão';
  protected pluralResource = 'os caminhões';
  protected selectQuery = '*, crlv(*), motorista(*)';

  constructor(protected readonly supabase: SupabaseService) {
    super(supabase);
  }

  override create(dto: CreateCaminhaoDto): Promise<Caminhao> {
    return super.create(dto);
  }

  override update(id: number, dto: UpdateCaminhaoDto): Promise<Caminhao> {
    return super.update(id, dto);
  }
}
