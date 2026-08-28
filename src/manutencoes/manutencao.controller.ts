import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
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
import { ManutencaoService } from './manutencao.service';
import { CreateManutencaoDto } from './dto/create-manutencao.dto';
import { UpdateManutencaoDto } from './dto/update-manutencao.dto';
import { Manutencao } from './entities/manutencao.entity';

@ApiTags('Manutenções')
@Controller('manutencao')
export class ManutencaoController {
  constructor(private readonly manutencaoService: ManutencaoService) {}

  @Post()
  @ApiOperation({ summary: 'Cadastra um novo registro de manutenção' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Manutenção cadastrada com sucesso.',
    type: Manutencao,
  })
  @ApiBadRequestResponse({ description: 'Dados de entrada inválidos.' })
  create(
    @Body() createManutencaoDto: CreateManutencaoDto,
  ): Promise<Manutencao> {
    return this.manutencaoService.create(createManutencaoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todas as manutenções registradas' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Lista de manutenções retornada com sucesso.',
    type: [Manutencao],
  })
  findAll(): Promise<Manutencao[]> {
    return this.manutencaoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca um registro de manutenção pelo ID' })
  @ApiParam({ name: 'id', description: 'ID da manutenção', example: 1 })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Manutenção encontrada.',
    type: Manutencao,
  })
  @ApiNotFoundResponse({ description: 'Manutenção não encontrada.' })
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Manutencao> {
    return this.manutencaoService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza um registro de manutenção existente' })
  @ApiParam({ name: 'id', description: 'ID da manutenção', example: 1 })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Manutenção atualizada com sucesso.',
    type: Manutencao,
  })
  @ApiNotFoundResponse({ description: 'Manutenção não encontrada.' })
  @ApiBadRequestResponse({ description: 'Dados de entrada inválidos.' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateManutencaoDto: UpdateManutencaoDto,
  ): Promise<Manutencao> {
    return this.manutencaoService.update(id, updateManutencaoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove um registro de manutenção pelo ID' })
  @ApiParam({ name: 'id', description: 'ID da manutenção', example: 1 })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Manutenção removida com sucesso.',
  })
  @ApiNotFoundResponse({ description: 'Manutenção não encontrada.' })
  remove(@Param('id', ParseIntPipe) id: number): Promise<Manutencao> {
    return this.manutencaoService.remove(id);
  }
}
