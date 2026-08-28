import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { SupabaseAuthGuard } from './supabase/supabase.jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/test')
  @UseGuards(SupabaseAuthGuard)
  test(@Request() req): Promise<string> {
    return this.appService.test();
  }
}
