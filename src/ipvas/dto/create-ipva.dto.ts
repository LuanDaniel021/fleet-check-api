import {
  IsInt,
  IsString,
  IsNumber,
  IsOptional,
  IsDateString,
} from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { TablesInsert } from '../../supabase/supabase.types';

export class CreateIpvaDto implements TablesInsert<'ipva'> {
  @ApiPropertyOptional({
    description: 'ID do CRLV vinculado a este IPVA',
    example: 3,
  })
  @IsInt({ message: 'O campo crlv_id deve ser um número inteiro.' })
  @IsOptional()
  crlv_id?: number | null;

  @ApiPropertyOptional({
    description: 'Ano de referência do imposto',
    example: 2026,
  })
  @IsInt({ message: 'O campo ano_referencia deve ser um número inteiro.' })
  @IsOptional()
  ano_referencia?: number | null;

  @ApiPropertyOptional({
    description: 'Data de vencimento do IPVA (formato YYYY-MM-DD)',
    example: '2026-03-15',
  })
  @IsDateString(
    {},
    { message: 'A data de vencimento deve estar no formato YYYY-MM-DD.' },
  )
  @IsOptional()
  data_vencimento?: string | null;

  @ApiPropertyOptional({
    description: 'Valor total do IPVA (em R$)',
    example: 2450.0,
  })
  @IsNumber({}, { message: 'O valor do IPVA deve ser um número.' })
  @IsOptional()
  valor?: number | null;

  @ApiPropertyOptional({
    description: 'Status do pagamento (ex: Pago, Pendente, Atrasado)',
    example: 'Pago',
  })
  @IsString({ message: 'O status deve ser um texto.' })
  @IsOptional()
  status?: string | null;
}
