import {
  IsInt,
  IsString,
  IsNumber,
  IsOptional,
  IsDateString,
} from 'class-validator';

export class CreateManutencaoDto {
  @IsInt()
  @IsOptional()
  caminhao_id?: number;

  @IsString()
  @IsOptional()
  tipo?: string;

  @IsNumber()
  @IsOptional()
  km_realizacao?: number;

  @IsDateString()
  @IsOptional()
  data_manutencao?: string;

  @IsNumber()
  @IsOptional()
  custo?: number;

  @IsString()
  @IsOptional()
  observacoes?: string;
}
