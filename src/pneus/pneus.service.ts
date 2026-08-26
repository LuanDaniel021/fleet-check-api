import { Injectable } from '@nestjs/common';
import { CreatePneusDto } from './dto/create-pneus.dto';
import { UpdatePneusDto } from './dto/update-pneus.dto';

@Injectable()
export class PneusService {
  create(createPneusDto: CreatePneusDto) {
    return 'This action adds a new pneus';
  }

  findAll() {
    return `This action returns all pneus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pneus`;
  }

  update(id: number, updatePneusDto: UpdatePneusDto) {
    return `This action updates a #${id} pneus`;
  }

  remove(id: number) {
    return `This action removes a #${id} pneus`;
  }
}
