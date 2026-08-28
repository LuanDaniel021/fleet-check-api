import { Injectable } from '@nestjs/common';
import { SupabaseService } from './supabase/supabase.service';

@Injectable()
export class AppService {
  constructor(private readonly supabase: SupabaseService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async test(): Promise<string> {
    const client = this.supabase.getClient();
    const { data, error } = await client.rpc('query_now');

    if (error) {
      throw error;
    }

    return data;
  }
}
