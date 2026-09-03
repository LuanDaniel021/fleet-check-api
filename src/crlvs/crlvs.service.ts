import { Injectable } from '@nestjs/common';
import { CreateCrlvDto } from './dto/create-crlv.dto';
import { UpdateCrlvDto } from './dto/update-crlv.dto';
import { SupabaseService } from '../supabase/supabase.service';
import { Crlv } from './entities/crlv.entity';
import { SupabaseCrudService } from '../supabase/supabase-crud.service';

@Injectable()
export class CrlvsService extends SupabaseCrudService<
  'crlv',
  Crlv,
  CreateCrlvDto,
  UpdateCrlvDto
> {
  protected table: 'crlv' = 'crlv';
  protected singularResource = 'o CRLV';
  protected pluralResource = 'os CRLVs';
  protected selectQuery = '*,caminhao(*)'

  constructor(supabase: SupabaseService) {
    super(supabase);
  }

  async findOneByPlate(placa:string):Promise<Crlv>{
    const client = this.supabase.getClient()
    const {data, error} = await client
      .from (this.table)
      .select(this.selectQuery)
      .eq('placa', placa)
      .single()
      console.log(placa)
      if (error) throw error

      return data as unknown as Crlv
  }
}


