import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { SupabaseAuthGuard } from './supabase/supabase.auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth('access-token')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/test')
  @UseGuards(SupabaseAuthGuard)
  test(): Promise<string> {
    return this.appService.test();
  }
}
