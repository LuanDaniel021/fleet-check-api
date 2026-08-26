import { IsNumber, IsString, IsOptional, IsInt } from 'class-validator';

export class CreateCaminhaoDto {
  @IsNumber()
  @IsOptional()
  km_atual?: number;

  @IsString()
  @IsOptional()
  status?: string;

  @IsInt()
  @IsOptional()
  crlv_id?: number;

  @IsInt()
  @IsOptional()
  motorista_id?: number;
}