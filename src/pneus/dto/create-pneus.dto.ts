import { IsInt, IsString, IsNumber, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { TablesInsert } from '../../supabase/supabase.types';

export class CreatePneuDto implements TablesInsert<'pneu'> {
  @ApiPropertyOptional({
    description: 'ID do caminhão em que o pneu está instalado',
    example: 1,
  })
  @IsInt({ message: 'O campo caminhao_id deve ser um número inteiro.' })
  @IsOptional()
  caminhao_id?: number | null;

  @ApiPropertyOptional({
    description: 'Posição do pneu no veículo',
    example: 'Dianteiro Esquerdo',
  })
  @IsString({ message: 'A posição do pneu deve ser um texto.' })
  @IsOptional()
  posicao?: string | null;

  @ApiPropertyOptional({
    description: 'Marca / Fabricante do pneu',
    example: 'Michelin',
  })
  @IsString({ message: 'A marca do pneu deve ser um texto.' })
  @IsOptional()
  marca?: string | null;

  @ApiPropertyOptional({
    description: 'Profundidade inicial do sulco da banda de rodagem (em mm)',
    example: 15.5,
  })
  @IsNumber({}, { message: 'A profundidade inicial do pneu deve ser um número.' })
  @IsOptional()
  sulco_inicial_mm?: number | null;

  @ApiPropertyOptional({
    description: 'Status do pneu (ex: Em uso, Descartado, Manutenção)',
    example: 'Em uso',
  })
  @IsString({ message: 'O status do pneu deve ser um texto.' })
  @IsOptional()
  status?: string | null;
}
