import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsString, IsOptional, IsInt } from 'class-validator';

export class CreateCaminhaoDto {
  @ApiPropertyOptional({
    description: 'Quilometragem atual do veículo',
    example: 125000.5,
    type: Number,
  })
  @IsNumber({}, { message: 'O campo km_atual deve ser um número.' })
  @IsOptional()
  km_atual?: number;

  @ApiPropertyOptional({
    description: 'Status operacional do caminhão',
    example: 'Em Operação',
    enum: ['Em Operação', 'Em Manutenção', 'Inativo', 'Garagem'],
  })
  @IsString({ message: 'O status deve ser um texto.' })
  @IsOptional()
  status?: string;

  @ApiPropertyOptional({
    description: 'ID do registro de CRLV a ser vinculado',
    example: 3,
  })
  @IsInt({ message: 'O crlv_id deve ser um número inteiro.' })
  @IsOptional()
  crlv_id?: number;

  @ApiPropertyOptional({
    description: 'ID do motorista responsável',
    example: 12,
  })
  @IsInt({ message: 'O motorista_id deve ser um número inteiro.' })
  @IsOptional()
  motorista_id?: number;
}
