import { PartialType } from '@nestjs/swagger';
import { CreateCrlvDto } from './create-crlv.dto';

export class UpdateCrlvDto extends PartialType(CreateCrlvDto) {}
