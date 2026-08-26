import {
  IsInt,
  IsString,
  IsNumber,
  IsOptional,
  IsDateString,
} from 'class-validator';

export class CreateIpvaDto {
  @IsInt()
  @IsOptional()
  crlv_id?: number;

  @IsInt()
  @IsOptional()
  ano_referencia?: number;

  @IsDateString()
  @IsOptional()
  data_vencimento?: string;

  @IsNumber()
  @IsOptional()
  valor?: number;

  @IsString()
  @IsOptional()
  status?: string;
}
