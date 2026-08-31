import { IsInt, IsNumber, IsOptional, IsDateString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { TablesInsert } from '../../supabase/supabase.types';

export class CreateViagemDto implements TablesInsert<'viagem'> {
  @ApiPropertyOptional({
    description: 'ID do caminhão vinculado à viagem',
    example: 1,
  })
  @IsInt({ message: 'O campo caminhao_id deve ser um número inteiro.' })
  @IsOptional()
  caminhao_id?: number | null;

  @ApiPropertyOptional({
    description: 'ID do motorista responsável pela viagem',
    example: 12,
  })
  @IsInt({ message: 'O campo motorista_id deve ser um número inteiro.' })
  @IsOptional()
  motorista_id?: number | null;

  @ApiPropertyOptional({
    description: 'Data e hora de início da viagem (formato ISO 8601)',
    example: '2026-08-27T10:00:00Z',
  })
  @IsDateString({}, { message: 'A data de início da viagem deve estar em formato ISO 8601.' })
  @IsOptional()
  data_inicio?: string | null;

  @ApiPropertyOptional({
    description: 'Data e hora de término da viagem (formato ISO 8601)',
    example: '2026-08-28T18:00:00Z',
  })
  @IsDateString({}, { message: 'A data de fim da viagem deve estar em formato ISO 8601.' })
  @IsOptional()
  data_fim?: string | null;

  @ApiPropertyOptional({
    description: 'Quilometragem inicial do veículo',
    example: 120000.0,
  })
  @IsNumber({}, { message: 'A quilometragem inicial deve ser um número.' })
  @IsOptional()
  km_inicial?: number | null;

  @ApiPropertyOptional({
    description: 'Quilometragem final do veículo',
    example: 120450.5,
  })
  @IsNumber({}, { message: 'A quilometragem final deve ser um número.' })
  @IsOptional()
  km_final?: number | null;

  @ApiPropertyOptional({
    description: 'Distância total percorrida na viagem (em km)',
    example: 450.5,
  })
  @IsNumber({}, { message: 'A distância percorrida deve ser um número.' })
  @IsOptional()
  distancia_percorrida?: number | null;
}
