import { Injectable } from '@nestjs/common';
import { CreateViagemDto } from './dto/create-viagem.dto';
import { UpdateViagemDto } from './dto/update-viagen.dto';

@Injectable()
export class ViagensService {
  create(createViagenDto: CreateViagemDto) {
    return 'This action adds a new viagen';
  }

  findAll() {
    return `This action returns all viagens`;
  }

  findOne(id: number) {
    return `This action returns a #${id} viagen`;
  }

  update(id: number, updateViagenDto: UpdateViagemDto) {
    return `This action updates a #${id} viagen`;
  }

  remove(id: number) {
    return `This action removes a #${id} viagen`;
  }
}
