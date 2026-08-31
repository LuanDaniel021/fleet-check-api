import {
  Controller,
  Post,
  Body,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { LoginUserDto } from './dto/login-users.dto';
import { CreateUserDto } from './dto/create-users.dto';

import { RegistryResponse } from './interfaces/registry-response.interface';
import { SupabaseAuthGuard } from '../supabase/supabase.auth.guard';
import { UpdateUserDto } from './dto/update-users.dto';
import { UpdateResponse } from './interfaces/update-response.interface';

@ApiBearerAuth('access-token')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('login')
  @ApiOperation({ summary: 'Realiza autenticação do usuário' })
  login(@Body() dto: LoginUserDto): Promise<string> {
    return this.usersService.login(dto);
  }

  @Post('registry')
  @ApiOperation({ summary: 'Cadastrar um novo usuário' })
  registry(@Body() dto: CreateUserDto): Promise<RegistryResponse> {
    return this.usersService.registry(dto);
  }

  @UseGuards(SupabaseAuthGuard)
  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza dados de um usuário pelo ID' })
  atualizarPorId(
    @Param('id') id: string,
    @Body() dto: UpdateUserDto,
  ): Promise<UpdateResponse> {
    return this.usersService.update(id, dto);
  }
}
