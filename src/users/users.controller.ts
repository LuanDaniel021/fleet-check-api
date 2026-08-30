import { Controller, Post, UseGuards, Body } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { LoginUserDto } from './dto/login-users.dto';
import { SupabaseAuthGuard } from '../supabase/supabase.jwt-auth.guard';

@ApiBearerAuth('access-token')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('login')
  @ApiOperation({ summary: 'Realiza autenticação do usuário' })
  @UseGuards(SupabaseAuthGuard)
  login(@Body() dto: LoginUserDto): Promise<string> {
    return this.usersService.login(dto);
  }
}
