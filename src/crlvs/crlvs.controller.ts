import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CrlvsService } from './crlvs.service';
import { CreateCrlvDto } from './dto/create-crlv.dto';
import { UpdateCrlvDto } from './dto/update-crlv.dto';

@Controller('crlvs')
export class CrlvsController {
  constructor(private readonly crlvsService: CrlvsService) {}

  @Post()
  create(@Body() createCrlvDto: CreateCrlvDto) {
    return this.crlvsService.create(createCrlvDto);
  }

  @Get()
  findAll() {
    return this.crlvsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.crlvsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCrlvDto: UpdateCrlvDto) {
    return this.crlvsService.update(+id, updateCrlvDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.crlvsService.remove(+id);
  }
}
