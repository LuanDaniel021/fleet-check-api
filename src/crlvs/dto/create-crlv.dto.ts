import {
  IsString,
  IsNotEmpty,
  IsInt,
  IsOptional,
  Length,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { TablesInsert } from '../../supabase/supabase.types';

export class CreateCrlvDto implements TablesInsert<'crlv'> {
  @ApiProperty({
    description: 'Placa do veículo',
    example: 'ABC1D23',
  })
  @IsString({ message: 'A placa deve ser um texto.' })
  @IsNotEmpty({ message: 'A placa do veículo é obrigatória.' })
  placa: string;

  @ApiProperty({
    description: 'Número do chassi do veículo',
    example: '9BWZZZ377VT001234',
  })
  @IsString({ message: 'O chassi deve ser um texto.' })
  @IsNotEmpty({ message: 'O chassi do veículo é obrigatório.' })
  chassi: string;

  @ApiPropertyOptional({
    description: 'Ano de fabricação do veículo',
    example: 2021,
  })
  @IsInt({ message: 'O ano de fabricação deve ser um número inteiro.' })
  @IsOptional()
  ano_fabricacao?: number | null;

  @ApiPropertyOptional({
    description: 'Ano do modelo do veículo',
    example: 2022,
  })
  @IsInt({ message: 'O ano do modelo deve ser um número inteiro.' })
  @IsOptional()
  ano_modelo?: number | null;

  @ApiPropertyOptional({
    description: 'Ano do exercício atual do licenciamento',
    example: 2026,
  })
  @IsInt({ message: 'O exercício deve ser um número inteiro.' })
  @IsOptional()
  exercicio?: number | null;

  @ApiPropertyOptional({
    description: 'Número do CRV (Certificado de Registro de Veículo)',
    example: '1234567890',
  })
  @IsString({ message: 'O número do CRV deve ser um texto.' })
  @IsOptional()
  crv?: string | null;

  @ApiPropertyOptional({
    description: 'Número do Código RENAVAM',
    example: '00123456789',
  })
  @IsString({ message: 'O RENAVAM deve ser um texto.' })
  @IsOptional()
  renavam?: string | null;

  @ApiPropertyOptional({
    description: 'Marca do veículo',
    example: 'Volvo',
  })
  @IsString({ message: 'A marca deve ser um texto.' })
  @IsOptional()
  marca?: string | null;

  @ApiPropertyOptional({
    description: 'Modelo do veículo',
    example: 'FH 540 6x4',
  })
  @IsString({ message: 'O modelo deve ser um texto.' })
  @IsOptional()
  modelo?: string | null;

  @ApiPropertyOptional({
    description: 'Espécie do veículo (ex: Carga, Passageiro)',
    example: 'Carga',
  })
  @IsString({ message: 'A espécie deve ser um texto.' })
  @IsOptional()
  especie?: string | null;

  @ApiPropertyOptional({
    description: 'Tipo do veículo (ex: Trator, Reboque)',
    example: 'Caminhão Trator',
  })
  @IsString({ message: 'O tipo deve ser um texto.' })
  @IsOptional()
  tipo?: string | null;

  @ApiPropertyOptional({
    description: 'UF do registro do veículo (sigla com 2 caracteres)',
    example: 'PR',
  })
  @IsString({ message: 'A UF deve ser um texto.' })
  @Length(2, 2, { message: 'A UF deve conter exatamente 2 caracteres.' })
  @IsOptional()
  uf?: string | null;
}
