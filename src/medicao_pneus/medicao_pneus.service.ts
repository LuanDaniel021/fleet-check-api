import { Injectable } from '@nestjs/common';
import { CreateMedicaoPneuDto } from './dto/create-medicao_pneus.dto';
import { UpdateMedicaoPneuDto } from './dto/update-medicao_pneus.dto';

@Injectable()
export class MedicaoPneusService {
  create(_createMedicaoPneusDto: CreateMedicaoPneuDto) {
    return 'This action adds a new medicaoPneus';
  }

  findAll() {
    return `This action returns all medicaoPneus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} medicaoPneus`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, _updateMedicaoPneusDto: UpdateMedicaoPneuDto) {
    return `This action updates a #${id} medicaoPneus`;
  }

  remove(id: number) {
    return `This action removes a #${id} medicaoPneus`;
  }
}
