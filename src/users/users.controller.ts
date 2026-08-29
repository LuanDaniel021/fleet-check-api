import { Controller, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-users.dto';
import { UpdateUserDto } from './dto/update-users.dto';

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
