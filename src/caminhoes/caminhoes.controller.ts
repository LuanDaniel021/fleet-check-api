import { Controller, Get, Post, Delete, Body, Patch, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { CaminhoesService } from './caminhoes.service';
import { CreateCaminhaoDto } from './dto/create-caminhao.dto';
import { UpdateCaminhaoDto } from './dto/update-caminhao.dto';
import { Caminhao } from './entities/caminhao.entity';

@ApiTags('Caminhões')
@Controller('caminhoes')
export class CaminhoesController {
  constructor(private readonly caminhoesService: CaminhoesService) {}

  @Get("/teste")
  teste() {
    return this.caminhoesService.teste();
  }

  @Post()
  @ApiOperation({ summary: 'Cadastra um novo caminhão' })
  @ApiResponse({ status: 201, description: 'Caminhão cadastrado com sucesso.', type: Caminhao })
  @ApiResponse({ status: 400, description: 'Dados de entrada inválidos.' })
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
  @ApiOperation({ summary: 'Atualiza dados de um caminhão existente' })
  @ApiParam({ name: 'id', description: 'ID do caminhão', example: 1 })
  @ApiResponse({ status: 200, description: 'Caminhão atualizado com sucesso.', type: Caminhao })
  @ApiResponse({ status: 404, description: 'Caminhão não encontrado.' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCaminhaoDto: UpdateCaminhaoDto,
  ) {
    return this.caminhoesService.update(id, updateCaminhaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.caminhoesService.remove(+id);
  }
}
