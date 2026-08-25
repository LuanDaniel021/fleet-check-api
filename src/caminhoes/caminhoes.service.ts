import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateCaminhoeDto } from './dto/create-caminhoe.dto';
import { UpdateCaminhoeDto } from './dto/update-caminhoe.dto';

import { SupabaseService } from '../supabase/supabase.service';

@Injectable()
export class CaminhoesService {

  constructor(private readonly supabase: SupabaseService) {}

  async teste() {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .rpc("query_now");
    
    console.log(data);

    if (error) throw new BadRequestException(error.message);
    return data;
  }

  create(_createCaminhoeDto: CreateCaminhoeDto) {
    return 'This action adds a new caminhoe';
  }

  findAll() {
    return `This action returns all caminhoes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} caminhoe`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updateCaminhoeDto: UpdateCaminhoeDto) {
    return `This action updates a #${id} caminhoe`;
  }

  remove(id: number) {
    return `This action removes a #${id} caminhoe`;
  }
}
