import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CaminhoesModule } from './caminhoes/caminhoes.module';
import { SupabaseService } from './supabase/supabase.service';
import { SupabaseModule } from './supabase/supabase.module';
import { ConfigModule } from '@nestjs/config';
import { CaminhoesController } from './caminhoes/caminhoes.controller';
import { CaminhoesService } from './caminhoes/caminhoes.service';
import { CrlvsModule } from './crlvs/crlvs.module';

@Module({
  
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    CaminhoesModule,
    SupabaseModule,
    CrlvsModule, 
  ],
  controllers: [AppController, CaminhoesController],
  providers: [AppService, CaminhoesService, SupabaseService],
})
export class AppModule {}
