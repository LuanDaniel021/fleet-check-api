import { PartialType } from '@nestjs/swagger';
import { CreateCaminhoeDto } from './create-caminhoe.dto';

export class UpdateCaminhoeDto extends PartialType(CreateCaminhoeDto) {}
