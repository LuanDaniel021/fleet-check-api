import { Injectable } from '@nestjs/common';
import { CreateCrlvDto } from './dto/create-crlv.dto';
import { UpdateCrlvDto } from './dto/update-crlv.dto';
import { SupabaseService } from '../supabase/supabase.service';
import { Crlv } from './entities/crlv.entity';
import { SupabaseCrudService } from '../supabase/supabase-crud.service';

@Injectable()
export class CrlvsService extends SupabaseCrudService<
  Crlv,
  CreateCrlvDto,
  UpdateCrlvDto
> {
  protected table = 'crlv';
  protected singularResource = 'o CRLV';
  protected pluralResource = 'os CRLVs';

  constructor(supabase: SupabaseService) {
    super(supabase);
  }
}
