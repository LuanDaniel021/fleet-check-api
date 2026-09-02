import { PartialType } from '@nestjs/swagger';
import { CreateCrlvDto } from './create-crlv.dto';
import { IUpdateDto } from '../../supabase/supabase.interfaces';

export class UpdateCrlvDto extends PartialType(CreateCrlvDto) implements IUpdateDto<'crlv'> {}
