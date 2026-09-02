import { Injectable } from '@nestjs/common';
import { CreateIpvaDto } from './dto/create-ipva.dto';
import { UpdateIpvaDto } from './dto/update-ipva.dto';
import { SupabaseService } from '../supabase/supabase.service';
import { Ipva } from './entities/ipva.entity';
import { SupabaseCrudService } from '../supabase/supabase-crud.service';

@Injectable()
export class IpvasService extends SupabaseCrudService<
  'ipva',
  Ipva,
  CreateIpvaDto,
  UpdateIpvaDto
> {
  protected table: 'ipva' = 'ipva';
  protected singularResource = 'o IPVA';
  protected pluralResource = 'os IPVAs';

  constructor(supabase: SupabaseService) {
    super(supabase);
  }
}
