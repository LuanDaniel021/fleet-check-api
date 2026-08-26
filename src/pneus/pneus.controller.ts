import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PneusService } from './pneus.service';
import { CreatePneusDto } from './dto/create-pneus.dto';
import { UpdatePneuDto } from './dto/update-pneus.dto';

@Controller('pneus')
export class PneusController {
  constructor(private readonly pneusService: PneusService) {}

  @Post()
  create(@Body() createPneusDto: CreatePneusDto) {
    return this.pneusService.create(createPneusDto);
  }

  @Get()
  findAll() {
    return this.pneusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pneusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePneusDto: UpdatePneuDto) {
    return this.pneusService.update(+id, updatePneusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pneusService.remove(+id);
  }
}
