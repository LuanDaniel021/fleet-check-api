import { Injectable } from '@nestjs/common';
import { CreateIpvaDto } from './dto/create-ipva.dto';
import { UpdateIpvaDto } from './dto/update-ipva.dto';

@Injectable()
export class IpvasService {
  create(createIpvaDto: CreateIpvaDto) {
    return 'This action adds a new ipva';
  }

  findAll() {
    return `This action returns all ipvas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ipva`;
  }

  update(id: number, updateIpvaDto: UpdateIpvaDto) {
    return `This action updates a #${id} ipva`;
  }

  remove(id: number) {
    return `This action removes a #${id} ipva`;
  }
}
