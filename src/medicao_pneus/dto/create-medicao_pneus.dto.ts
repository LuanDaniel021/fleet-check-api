import { IsInt, IsNumber, IsOptional, IsDateString } from 'class-validator';

export class CreateMedicaoPneuDto {
  @IsInt()
  @IsOptional()
  pneu_id?: number;

  @IsInt()
  @IsOptional()
  viagem_id?: number;

  @IsNumber()
  @IsOptional()
  profundidade_atual_mm?: number;

  @IsDateString()
  @IsOptional()
  data_medicao?: string;
}
