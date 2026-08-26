import { Injectable } from '@nestjs/common';
import { CreateMedicaoPneusDto } from './dto/create-medicao_pneus.dto';
import { UpdateMedicaoPneuDto } from './dto/update-medicao_pneus.dto';

@Injectable()
export class MedicaoPneusService {
  create(createMedicaoPneusDto: CreateMedicaoPneusDto) {
    return 'This action adds a new medicaoPneus';
  }

  findAll() {
    return `This action returns all medicaoPneus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} medicaoPneus`;
  }

  update(id: number, updateMedicaoPneusDto: UpdateMedicaoPneuDto) {
    return `This action updates a #${id} medicaoPneus`;
  }

  remove(id: number) {
    return `This action removes a #${id} medicaoPneus`;
  }
}
