import { IsInt, IsNumber, IsOptional, IsDateString } from 'class-validator';

export class CreateViagemDto {
  @IsInt()
  @IsOptional()
  caminhao_id?: number;

  @IsInt()
  @IsOptional()
  motorista_id?: number;

  @IsDateString()
  @IsOptional()
  data_inicio?: string;

  @IsDateString()
  @IsOptional()
  data_fim?: string;

  @IsNumber()
  @IsOptional()
  km_inicial?: number;

  @IsNumber()
  @IsOptional()
  km_final?: number;

  @IsNumber()
  @IsOptional()
  distancia_percorrida?: number;
}
