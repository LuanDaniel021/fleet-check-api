import { Controller, Post, Body } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { LoginUserDto } from './dto/login-users.dto';
import { CreateUserDto } from './dto/create-users.dto';

import { RegistryResponse } from './interfaces/registry-response.interface';

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
}
