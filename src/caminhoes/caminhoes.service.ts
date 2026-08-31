import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { BaseCrudService } from '../supabase/base-crud.service';
import { Caminhao } from './entities/caminhao.entity';
import { CreateCaminhaoDto } from './dto/create-caminhao.dto';
import { UpdateCaminhaoDto } from './dto/update-caminhao.dto';

@Injectable()
export class CaminhoesService extends BaseCrudService<
  Caminhao,
  CreateCaminhaoDto,
  UpdateCaminhaoDto
> {
  protected table = 'caminhao';
  protected singularResource = 'o caminhão';
  protected pluralResource = 'os caminhões';
  protected selectQuery = '*, crlv(*), motorista(*)';

  constructor(supabase: SupabaseService) {
    super(supabase);
  }
}
