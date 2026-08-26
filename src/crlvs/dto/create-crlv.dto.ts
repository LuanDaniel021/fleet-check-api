import {
  IsString,
  IsNotEmpty,
  IsInt,
  IsOptional,
  Length,
} from 'class-validator';

export class CreateCrlvDto {
  @IsString()
  @IsNotEmpty()
  placa: string;

  @IsString()
  @IsNotEmpty()
  chassi: string;

  @IsInt()
  @IsOptional()
  ano_fabricacao?: number;

  @IsInt()
  @IsOptional()
  ano_modelo?: number;

  @IsInt()
  @IsOptional()
  exercicio?: number;

  @IsString()
  @IsOptional()
  crv?: string;

  @IsString()
  @IsOptional()
  renavam?: string;

  @IsString()
  @IsOptional()
  marca?: string;

  @IsString()
  @IsOptional()
  modelo?: string;

  @IsString()
  @IsOptional()
  especie?: string;

  @IsString()
  @IsOptional()
  tipo?: string;

  @IsString()
  @Length(2, 2)
  @IsOptional()
  uf?: string;
}
