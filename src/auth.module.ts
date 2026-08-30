import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { SupabaseAuthGuard } from './supabase/supabase.jwt-auth.guard';
import { SupabaseStrategy } from './supabase/supabase.strategy';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'supabase' })],
  providers: [SupabaseStrategy, SupabaseAuthGuard],
  exports: [PassportModule, SupabaseAuthGuard],
})
export class AuthModule {}
