import { PartialType } from '@nestjs/swagger';
import { CreatePneusDto } from './create-pneus.dto';

export class UpdatePneusDto extends PartialType(CreatePneusDto) {}
