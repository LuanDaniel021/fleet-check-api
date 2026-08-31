import {
  IsInt,
  IsString,
  IsNumber,
  IsOptional,
  IsDateString,
} from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { TablesInsert } from '../../supabase/supabase.types';

export class CreateManutencaoDto implements TablesInsert<'manutencao'> {
  @ApiPropertyOptional({
    description: 'ID do caminhão que recebeu a manutenção',
    example: 1,
  })
  @IsInt({ message: 'O campo caminhao_id deve ser um número inteiro.' })
  @IsOptional()
  caminhao_id?: number | null;

  @ApiPropertyOptional({
    description: 'Tipo de manutenção realizada',
    example: 'Preventiva',
  })
  @IsString({ message: 'O tipo da manutenção deve ser um texto.' })
  @IsOptional()
  tipo?: string | null;

  @ApiPropertyOptional({
    description: 'Quilometragem do caminhão no momento do serviço',
    example: 125000.0,
  })
  @IsNumber(
    {},
    { message: 'A quilometragem da manutenção deve ser um número.' },
  )
  @IsOptional()
  km_realizacao?: number | null;

  @ApiPropertyOptional({
    description: 'Data de realização da manutenção (YYYY-MM-DD)',
    example: '2026-08-20',
  })
  @IsDateString(
    {},
    { message: 'A data da manutenção deve estar no formato YYYY-MM-DD.' },
  )
  @IsOptional()
  data_manutencao?: string | null;

  @ApiPropertyOptional({
    description: 'Custo total do serviço (em R$)',
    example: 850.5,
  })
  @IsNumber({}, { message: 'O custo da manutenção deve ser um número.' })
  @IsOptional()
  custo?: number | null;

  @ApiPropertyOptional({
    description: 'Observações e detalhes sobre as peças ou serviços prestados',
    example: 'Troca do filtro de combustível e alinhamento do eixo dianteiro.',
  })
  @IsString({ message: 'As observações devem ser um texto.' })
  @IsOptional()
  observacoes?: string | null;
}
