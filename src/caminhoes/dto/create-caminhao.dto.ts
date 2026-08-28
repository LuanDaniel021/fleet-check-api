import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsString, IsOptional, IsInt } from 'class-validator';
import { TablesInsert } from '../../supabase/supabase.types';

export class CreateCaminhaoDto implements TablesInsert<'caminhao'> {
  @ApiPropertyOptional({
    description: 'Quilometragem atual do veículo',
    example: 125000.5,
    type: Number,
  })
  @IsNumber({}, { message: 'O campo km_atual deve ser um número.' })
  @IsOptional()
  km_atual?: number | null;

  @ApiPropertyOptional({
    description: 'Status operacional do caminhão',
    example: 'Em Operação',
    enum: ['Em Operação', 'Em Manutenção', 'Inativo', 'Garagem'],
  })
  @IsString({ message: 'O status deve ser um texto.' })
  @IsOptional()
  status?: string | null;

  @ApiPropertyOptional({
    description: 'ID do registro de CRLV a ser vinculado',
    example: 3,
  })
  @IsInt({ message: 'O crlv_id deve ser um número inteiro.' })
  @IsOptional()
  crlv_id?: number | null;

  @ApiPropertyOptional({
    description: 'ID do motorista responsável',
    example: 12,
  })
  @IsInt({ message: 'O motorista_id deve ser um número inteiro.' })
  @IsOptional()
  motorista_id?: number | null;
}
