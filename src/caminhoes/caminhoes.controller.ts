import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CaminhoesService } from './caminhoes.service';
import { CreateCaminhaoDto } from './dto/create-caminhao.dto';
import { UpdateCaminhaoDto } from './dto/update-caminhao.dto';

@Controller('caminhoes')
export class CaminhoesController {
  constructor(private readonly caminhoesService: CaminhoesService) {}

  @Get("/teste")
  teste() {
    return this.caminhoesService.teste();
  }

  @Post()
  create(@Body() createCaminhaoDto: CreateCaminhaoDto) {
    return this.caminhoesService.create(createCaminhaoDto);
  }

  @Get()
  findAll() {
    return this.caminhoesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.caminhoesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCaminhaoDto: UpdateCaminhaoDto) {
    return this.caminhoesService.update(+id, updateCaminhaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.caminhoesService.remove(+id);
  }
}
