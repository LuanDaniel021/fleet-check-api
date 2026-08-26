import { Injectable } from '@nestjs/common';
import { CreatePneuDto } from './dto/create-pneus.dto';
import { UpdatePneuDto } from './dto/update-pneus.dto';

@Injectable()
export class PneusService {
  create(_createPneusDto: CreatePneuDto) {
    return 'This action adds a new pneus';
  }

  findAll() {
    return `This action returns all pneus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pneus`;
  }

  update(id: number, _updatePneusDto: UpdatePneuDto) {
    return `This action updates a #${id} pneus`;
  }

  remove(id: number) {
    return `This action removes a #${id} pneus`;
  }
}
