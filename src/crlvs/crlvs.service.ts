import { Injectable } from '@nestjs/common';
import { CreateCrlvDto } from './dto/create-crlv.dto';
import { UpdateCrlvDto } from './dto/update-crlv.dto';
import { SupabaseService } from '../supabase/supabase.service';
import { Crlv } from './entities/crlv.entity';
import { BaseCrudService } from '../supabase/base-crud.service';

@Injectable()
export class CrlvsService extends BaseCrudService<Crlv> {
  protected table = 'crlv';
  protected singularResource = 'o CRLV';
  protected pluralResource = 'os CRLVs';

  constructor(protected readonly supabase: SupabaseService) {
    super(supabase);
  }

  override create(dto: CreateCrlvDto): Promise<Crlv> {
    return super.create(dto);
  }

  override update(id: number, dto: UpdateCrlvDto): Promise<Crlv> {
    return super.update(id, dto);
  }
}
