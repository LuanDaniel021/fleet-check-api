import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MedicaoPneusService } from './medicao_pneus.service';
import { CreateMedicaoPneusDto } from './dto/create-medicao_pneus.dto';
import { UpdateMedicaoPneusDto } from './dto/update-medicao_pneus.dto';

@Controller('medicao-pneus')
export class MedicaoPneusController {
  constructor(private readonly medicaoPneusService: MedicaoPneusService) {}

  @Post()
  create(@Body() createMedicaoPneusDto: CreateMedicaoPneusDto) {
    return this.medicaoPneusService.create(createMedicaoPneusDto);
  }

  @Get()
  findAll() {
    return this.medicaoPneusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medicaoPneusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMedicaoPneusDto: UpdateMedicaoPneusDto) {
    return this.medicaoPneusService.update(+id, updateMedicaoPneusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicaoPneusService.remove(+id);
  }
}
