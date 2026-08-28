import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
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
import { MotoristasService } from './motoristas.service';
import { CreateMotoristaDto } from './dto/create-motorista.dto';
import { UpdateMotoristaDto } from './dto/update-motorista.dto';
import { Motorista } from './entities/motorista.entity';

@ApiTags('Motoristas')
@Controller('motoristas')
export class MotoristasController {
  constructor(private readonly motoristasService: MotoristasService) {}

  @Post()
  @ApiOperation({ summary: 'Cadastra um novo motorista' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Motorista cadastrado com sucesso.',
    type: Motorista,
  })
  @ApiBadRequestResponse({ description: 'Dados de entrada inválidos.' })
  create(@Body() createMotoristaDto: CreateMotoristaDto): Promise<Motorista> {
    return this.motoristasService.create(createMotoristaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todos os motoristas cadastrados' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Lista de motoristas retornada com sucesso.',
    type: [Motorista],
  })
  findAll(): Promise<Motorista[]> {
    return this.motoristasService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca um motorista pelo ID' })
  @ApiParam({ name: 'id', description: 'ID do motorista', example: 12 })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Motorista encontrado.',
    type: Motorista,
  })
  @ApiNotFoundResponse({ description: 'Motorista não encontrado.' })
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Motorista> {
    return this.motoristasService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza dados de um motorista existente' })
  @ApiParam({ name: 'id', description: 'ID do motorista', example: 12 })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Motorista atualizado com sucesso.',
    type: Motorista,
  })
  @ApiNotFoundResponse({ description: 'Motorista não encontrado.' })
  @ApiBadRequestResponse({ description: 'Dados de entrada inválidos.' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMotoristaDto: UpdateMotoristaDto,
  ): Promise<Motorista> {
    return this.motoristasService.update(id, updateMotoristaDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Remove um motorista pelo ID' })
  @ApiParam({ name: 'id', description: 'ID do motorista', example: 12 })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Motorista removido com sucesso.',
  })
  @ApiNotFoundResponse({ description: 'Motorista não encontrado.' })
  remove(@Param('id', ParseIntPipe) id: number): Promise<Motorista> {
    return this.motoristasService.remove(id);
  }
}
