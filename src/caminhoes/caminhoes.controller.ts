import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Patch,
  Param,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiNotFoundResponse,
  ApiBadRequestResponse,
} from '@nestjs/swagger';
import { CaminhoesService } from './caminhoes.service';
import { CreateCaminhaoDto } from './dto/create-caminhao.dto';
import { UpdateCaminhaoDto } from './dto/update-caminhao.dto';
import { Caminhao } from './entities/caminhao.entity';

@ApiTags('Caminhões')
@Controller('caminhoes')
export class CaminhoesController {
  constructor(private readonly caminhoesService: CaminhoesService) {}

  @Post()
  @ApiOperation({ summary: 'Cadastra um novo caminhão' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Caminhão cadastrado com sucesso.',
    type: Caminhao,
  })
  @ApiBadRequestResponse({ description: 'Dados de entrada inválidos.' })
  create(@Body() createCaminhaoDto: CreateCaminhaoDto): Promise<Caminhao> {
    return this.caminhoesService.create(createCaminhaoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todos os caminhões cadastrados' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Lista de caminhões retornada com sucesso.',
    type: [Caminhao],
  })
  findAll(): Promise<Caminhao[]> {
    return this.caminhoesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca um caminhão pelo ID' })
  @ApiParam({ name: 'id', description: 'ID do caminhão', example: 1 })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Caminhão encontrado.',
    type: Caminhao,
  })
  @ApiNotFoundResponse({ description: 'Caminhão não encontrado.' })
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Caminhao> {
    return this.caminhoesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza dados de um caminhão existente' })
  @ApiParam({ name: 'id', description: 'ID do caminhão', example: 1 })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Caminhão atualizado com sucesso.',
    type: Caminhao,
  })
  @ApiNotFoundResponse({ description: 'Caminhão não encontrado.' })
  @ApiBadRequestResponse({ description: 'Dados de entrada inválidos.' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCaminhaoDto: UpdateCaminhaoDto,
  ): Promise<Caminhao> {
    return this.caminhoesService.update(id, updateCaminhaoDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Remove um caminhão pelo ID' })
  @ApiParam({ name: 'id', description: 'ID do caminhão', example: 1 })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Caminhão removido com sucesso.',
  })
  @ApiNotFoundResponse({ description: 'Caminhão não encontrado.' })
  remove(@Param('id', ParseIntPipe) id: number): Promise<Caminhao> {
    return this.caminhoesService.remove(id);
  }
}
