import { PartialType } from '@nestjs/swagger';
import { CreateMedicaoPneuDto } from './create-medicao_pneu.dto';

export class UpdateMedicaoPneuDto extends PartialType(CreateMedicaoPneuDto) {}
