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
import { IpvasService } from './ipvas.service';
import { CreateIpvaDto } from './dto/create-ipva.dto';
import { UpdateIpvaDto } from './dto/update-ipva.dto';
import { Ipva } from './entities/ipva.entity';

@ApiTags('IPVA')
@Controller('ipvas')
export class IpvasController {
  constructor(private readonly ipvasService: IpvasService) {}

  @Post()
  @ApiOperation({ summary: 'Cadastra um novo registro de IPVA' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'IPVA cadastrado com sucesso.',
    type: Ipva,
  })
  @ApiBadRequestResponse({ description: 'Dados de entrada inválidos.' })
  create(@Body() createIpvaDto: CreateIpvaDto): Promise<Ipva> {
    return this.ipvasService.create(createIpvaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todos os registros de IPVA' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Lista de IPVAs retornada com sucesso.',
    type: [Ipva],
  })
  findAll(): Promise<Ipva[]> {
    return this.ipvasService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca um registro de IPVA pelo ID' })
  @ApiParam({ name: 'id', description: 'ID do IPVA', example: 1 })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'IPVA encontrado.',
    type: Ipva,
  })
  @ApiNotFoundResponse({ description: 'IPVA não encontrado.' })
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Ipva> {
    return this.ipvasService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza um registro de IPVA existente' })
  @ApiParam({ name: 'id', description: 'ID do IPVA', example: 1 })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'IPVA atualizado com sucesso.',
    type: Ipva,
  })
  @ApiNotFoundResponse({ description: 'IPVA não encontrado.' })
  @ApiBadRequestResponse({ description: 'Dados de entrada inválidos.' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateIpvaDto: UpdateIpvaDto,
  ): Promise<Ipva> {
    return this.ipvasService.update(id, updateIpvaDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Remove um registro de IPVA pelo ID' })
  @ApiParam({ name: 'id', description: 'ID do IPVA', example: 1 })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'IPVA removido com sucesso.',
  })
  @ApiNotFoundResponse({ description: 'IPVA não encontrado.' })
  remove(@Param('id', ParseIntPipe) id: number): Promise<Ipva> {
    return this.ipvasService.remove(id);
  }
}
