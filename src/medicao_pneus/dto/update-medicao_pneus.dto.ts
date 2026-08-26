import { PartialType } from '@nestjs/swagger';
import { CreateMedicaoPneusDto } from './create-medicao_pneus.dto';

export class UpdateMedicaoPneusDto extends PartialType(CreateMedicaoPneusDto) {}
