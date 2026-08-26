import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { CreateCaminhaoDto } from './dto/create-caminhao.dto';
import { UpdateCaminhaoDto } from './dto/update-caminhao.dto';

import { SupabaseService } from '../supabase/supabase.service';

@Injectable()
export class CaminhoesService {

  constructor(private readonly supabase: SupabaseService) {}

  async teste() {
    const client = this.supabase.getClient();
    const { data, error } = await client.rpc("query_now");
    if (error) throw new BadRequestException(error.message);
    return data;
  }

  async create(_createCaminhaoDto: CreateCaminhaoDto) {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('caminhao')
      .insert(_createCaminhaoDto)
      .select()
      .single();
    if (error) throw new Error(error.message);
    return data;
  }

  async findAll() {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('caminhao')
      .select('*, crlv(*), motorista(*)');
    if (error) throw new Error(error.message);
    return data;    
  }

  async findOne(id: number) {
    const client = this.supabase.getClient();
    const { data, error } = await client
      .from('caminhao')
      .select('*, crlv(*), motorista(*)')
      .eq('id', id)
      .single();
    if (error || !data) throw new NotFoundException('Caminhão não encontrado.');
    return data;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async update(id: number, updateCaminhaoDto: UpdateCaminhaoDto) {
    const client = this.supabase.getClient();
    return `This action updates a #${id} caminhoe`;
  }

  async remove(id: number) {
    const client = this.supabase.getClient(); 
    return `This action removes a #${id} caminhoe`;
  }
}
