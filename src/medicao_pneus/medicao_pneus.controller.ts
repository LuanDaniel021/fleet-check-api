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
import { MedicaoPneusService } from './medicao_pneus.service';
import { CreateMedicaoPneuDto } from './dto/create-medicao_pneus.dto';
import { UpdateMedicaoPneuDto } from './dto/update-medicao_pneus.dto';
import { MedicaoPneu } from './entities/medicao_pneu.entity';

@ApiTags('Medição de Pneus')
@Controller('medicao-pneus')
export class MedicaoPneusController {
  constructor(private readonly medicaoPneusService: MedicaoPneusService) {}

  @Post()
  @ApiOperation({ summary: 'Cadastra uma nova medição de pneu' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Medição de pneu registrada com sucesso.',
    type: MedicaoPneu,
  })
  @ApiBadRequestResponse({ description: 'Dados de entrada inválidos.' })
  create(
    @Body() createMedicaoPneuDto: CreateMedicaoPneuDto,
  ): Promise<MedicaoPneu> {
    return this.medicaoPneusService.create(createMedicaoPneuDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todas as medições de pneus registradas' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Lista de medições retornada com sucesso.',
    type: [MedicaoPneu],
  })
  findAll(): Promise<MedicaoPneu[]> {
    return this.medicaoPneusService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca uma medição de pneu pelo ID' })
  @ApiParam({ name: 'id', description: 'ID da medição', example: 1 })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Medição encontrada.',
    type: MedicaoPneu,
  })
  @ApiNotFoundResponse({ description: 'Medição não encontrada.' })
  findOne(@Param('id', ParseIntPipe) id: number): Promise<MedicaoPneu> {
    return this.medicaoPneusService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza uma medição de pneu existente' })
  @ApiParam({ name: 'id', description: 'ID da medição', example: 1 })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Medição atualizada com sucesso.',
    type: MedicaoPneu,
  })
  @ApiNotFoundResponse({ description: 'Medição não encontrada.' })
  @ApiBadRequestResponse({ description: 'Dados de entrada inválidos.' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMedicaoPneuDto: UpdateMedicaoPneuDto,
  ): Promise<MedicaoPneu> {
    return this.medicaoPneusService.update(id, updateMedicaoPneuDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove uma medição de pneu pelo ID' })
  @ApiParam({ name: 'id', description: 'ID da medição', example: 1 })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Medição removida com sucesso.',
  })
  @ApiNotFoundResponse({ description: 'Medição não encontrada.' })
  remove(@Param('id', ParseIntPipe) id: number): Promise<MedicaoPneu> {
    return this.medicaoPneusService.remove(id);
  }
}
