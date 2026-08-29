import { PartialType } from '@nestjs/swagger';
import { CreatePneuDto } from './create-users.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
