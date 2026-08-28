import { Injectable, UseGuards } from '@nestjs/common';
import { SupabaseService } from './supabase/supabase.service';
import { SupabaseAuthGuard } from './supabase/supabase.jwt-auth.guard';

@Injectable()
export class AppService {
  constructor(private readonly supabase: SupabaseService) {}

  getHello(): string {
    return 'Hello World!';
  }

  @UseGuards(SupabaseAuthGuard)
  async test(): Promise<string> {
    const client = this.supabase.getClient();
    const { data, error } = await client.rpc('query_now');

    if (error) {
      throw error;
    }

    return data;
  }
}
