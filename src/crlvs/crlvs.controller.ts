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
import { CrlvsService } from './crlvs.service';
import { CreateCrlvDto } from './dto/create-crlv.dto';
import { UpdateCrlvDto } from './dto/update-crlv.dto';
import { Crlv } from './entities/crlv.entity';

@ApiTags('CRLV')
@Controller('crlvs')
export class CrlvsController {
  constructor(private readonly crlvsService: CrlvsService) {}

  @Post()
  @ApiOperation({ summary: 'Cadastra um novo CRLV' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'CRLV cadastrado com sucesso.',
    type: Crlv,
  })
  @ApiBadRequestResponse({ description: 'Dados de entrada inválidos.' })
  create(@Body() createCrlvDto: CreateCrlvDto): Promise<Crlv> {
    return this.crlvsService.create(createCrlvDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todos os documentos de CRLV cadastrados' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Lista de CRLVs retornada com sucesso.',
    type: [Crlv],
  })
  findAll(): Promise<Crlv[]> {
    return this.crlvsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca um CRLV pelo ID' })
  @ApiParam({ name: 'id', description: 'ID do CRLV', example: 3 })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'CRLV encontrado.',
    type: Crlv,
  })
  @ApiNotFoundResponse({ description: 'CRLV não encontrado.' })
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Crlv> {
    return this.crlvsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza dados de um CRLV existente' })
  @ApiParam({ name: 'id', description: 'ID do CRLV', example: 3 })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'CRLV atualizado com sucesso.',
    type: Crlv,
  })
  @ApiNotFoundResponse({ description: 'CRLV não encontrado.' })
  @ApiBadRequestResponse({ description: 'Dados de entrada inválidos.' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCrlvDto: UpdateCrlvDto,
  ): Promise<Crlv> {
    return this.crlvsService.update(id, updateCrlvDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove um CRLV pelo ID' })
  @ApiParam({ name: 'id', description: 'ID do CRLV', example: 3 })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'CRLV removido com sucesso.',
  })
  @ApiNotFoundResponse({ description: 'CRLV não encontrado.' })
  remove(@Param('id', ParseIntPipe) id: number): Promise<Crlv> {
    return this.crlvsService.remove(id);
  }
}
