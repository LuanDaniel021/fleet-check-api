import { IsString, IsOptional } from 'class-validator';

export class CreateMotoristaDto {
  @IsString()
  @IsOptional()
  nome?: string;

  @IsString()
  @IsOptional()
  cpf?: string;

  @IsString()
  @IsOptional()
  numero_cnh?: string;

  @IsString()
  @IsOptional()
  categoria_cnh?: string;
}
