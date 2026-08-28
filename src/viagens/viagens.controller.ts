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
import { ViagensService } from './viagens.service';
import { CreateViagemDto } from './dto/create-viagem.dto';
import { UpdateViagemDto } from './dto/update-viagem.dto';
import { Viagem } from './entities/viagem.entity';

@ApiTags('Viagens')
@Controller('viagens')
export class ViagensController {
  constructor(private readonly viagensService: ViagensService) {}

  @Post()
  @ApiOperation({ summary: 'Cadastra uma nova viagem' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Viagem cadastrada com sucesso.',
    type: Viagem,
  })
  @ApiBadRequestResponse({ description: 'Dados de entrada inválidos.' })
  create(@Body() createViagemDto: CreateViagemDto): Promise<Viagem> {
    return this.viagensService.create(createViagemDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todas as viagens cadastradas' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Lista de viagens retornada com sucesso.',
    type: [Viagem],
  })
  findAll(): Promise<Viagem[]> {
    return this.viagensService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca uma viagem pelo ID' })
  @ApiParam({ name: 'id', description: 'ID da viagem', example: 1 })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Viagem encontrada.',
    type: Viagem,
  })
  @ApiNotFoundResponse({ description: 'Viagem não encontrada.' })
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Viagem> {
    return this.viagensService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza dados de uma viagem existente' })
  @ApiParam({ name: 'id', description: 'ID da viagem', example: 1 })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Viagem atualizada com sucesso.',
    type: Viagem,
  })
  @ApiNotFoundResponse({ description: 'Viagem não encontrada.' })
  @ApiBadRequestResponse({ description: 'Dados de entrada inválidos.' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateViagemDto: UpdateViagemDto,
  ): Promise<Viagem> {
    return this.viagensService.update(id, updateViagemDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove uma viagem pelo ID' })
  @ApiParam({ name: 'id', description: 'ID da viagem', example: 1 })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Viagem removida com sucesso.',
  })
  @ApiNotFoundResponse({ description: 'Viagem não encontrada.' })
  remove(@Param('id', ParseIntPipe) id: number): Promise<Viagem> {
    return this.viagensService.remove(id);
  }
}
