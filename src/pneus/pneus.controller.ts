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
import { PneusService } from './pneus.service';
import { CreatePneuDto } from './dto/create-pneus.dto';
import { UpdatePneuDto } from './dto/update-pneus.dto';
import { Pneu } from './entities/pneu.entity';

@ApiTags('Pneus')
@Controller('pneus')
export class PneusController {
  constructor(private readonly pneusService: PneusService) {}

  @Post()
  @ApiOperation({ summary: 'Cadastra um novo pneu' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Pneu cadastrado com sucesso.',
    type: Pneu,
  })
  @ApiBadRequestResponse({ description: 'Dados de entrada inválidos.' })
  create(@Body() createPneuDto: CreatePneuDto): Promise<Pneu> {
    return this.pneusService.create(createPneuDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todos os pneus cadastrados' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Lista de pneus retornada com sucesso.',
    type: [Pneu],
  })
  findAll(): Promise<Pneu[]> {
    return this.pneusService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca um pneu pelo ID' })
  @ApiParam({ name: 'id', description: 'ID do pneu', example: 1 })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Pneu encontrado.',
    type: Pneu,
  })
  @ApiNotFoundResponse({ description: 'Pneu não encontrado.' })
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Pneu> {
    return this.pneusService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza dados de um pneu existente' })
  @ApiParam({ name: 'id', description: 'ID do pneu', example: 1 })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Pneu atualizado com sucesso.',
    type: Pneu,
  })
  @ApiNotFoundResponse({ description: 'Pneu não encontrado.' })
  @ApiBadRequestResponse({ description: 'Dados de entrada inválidos.' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePneuDto: UpdatePneuDto,
  ): Promise<Pneu> {
    return this.pneusService.update(id, updatePneuDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Remove um pneu pelo ID' })
  @ApiParam({ name: 'id', description: 'ID do pneu', example: 1 })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Pneu removido com sucesso.',
  })
  @ApiNotFoundResponse({ description: 'Pneu não encontrado.' })
  remove(@Param('id', ParseIntPipe) id: number): Promise<Pneu> {
    return this.pneusService.remove(id);
  }
}
