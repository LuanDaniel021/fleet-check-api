import { IsInt, IsString, IsNumber, IsOptional } from 'class-validator';

export class CreatePneuDto {
  @IsInt()
  @IsOptional()
  caminhao_id?: number;

  @IsString()
  @IsOptional()
  posicao?: string;

  @IsString()
  @IsOptional()
  marca?: string;

  @IsNumber()
  @IsOptional()
  sulco_inicial_mm?: number;

  @IsString()
  @IsOptional()
  status?: string;
}
