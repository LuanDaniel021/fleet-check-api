import { IsInt, IsNumber, IsOptional, IsDateString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { TablesInsert } from '../../supabase/supabase.types';

export class CreateMedicaoPneuDto implements TablesInsert<'medicao_pneu'> {
  @ApiPropertyOptional({
    description: 'ID do pneu medido',
    example: 1,
  })
  @IsInt({ message: 'O campo pneu_id deve ser um número inteiro.' })
  @IsOptional()
  pneu_id?: number | null;

  @ApiPropertyOptional({
    description: 'ID da viagem em que a medição foi realizada',
    example: 1,
  })
  @IsInt({ message: 'O campo viagem_id deve ser um número inteiro.' })
  @IsOptional()
  viagem_id?: number | null;

  @ApiPropertyOptional({
    description: 'Profundidade atual do sulco do pneu (em mm)',
    example: 12.3,
  })
  @IsNumber({}, { message: 'A profundidade do pneu deve ser um número.' })
  @IsOptional()
  profundidade_atual_mm?: number | null;

  @ApiPropertyOptional({
    description: 'Data em que a medição foi realizada (formato YYYY-MM-DD)',
    example: '2026-08-27',
  })
  @IsDateString({}, { message: 'A data da medição deve estar no formato YYYY-MM-DD.' })
  @IsOptional()
  data_medicao?: string | null;
}
