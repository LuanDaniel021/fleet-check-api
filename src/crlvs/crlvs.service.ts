import { Injectable } from '@nestjs/common';
import { CreateCrlvDto } from './dto/create-crlv.dto';
import { UpdateCrlvDto } from './dto/update-crlv.dto';

@Injectable()
export class CrlvsService {
  create(createCrlvDto: CreateCrlvDto) {
    return 'This action adds a new crlv';
  }

  findAll() {
    return `This action returns all crlvs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} crlv`;
  }

  update(id: number, updateCrlvDto: UpdateCrlvDto) {
    return `This action updates a #${id} crlv`;
  }

  remove(id: number) {
    return `This action removes a #${id} crlv`;
  }
}
