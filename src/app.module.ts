import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CaminhoesModule } from './caminhoes/caminhoes.module';
import { SupabaseModule } from './supabase/supabase.module';
import { ConfigModule } from '@nestjs/config';
import { CrlvsModule } from './crlvs/crlvs.module';
import { ViagensModule } from './viagens/viagens.module';
import { PneusModule } from './pneus/pneus.module';
import { MedicaoPneusModule } from './medicao_pneus/medicao_pneus.module';
import { IpvasModule } from './ipvas/ipvas.module';
import { MotoristasModule } from './motoristas/motoristas.module';
import { ManutencaoModule } from './manutencoes/manutencao.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    CaminhoesModule,
    SupabaseModule,
    CrlvsModule,
    ViagensModule,
    PneusModule,
    MedicaoPneusModule,
    IpvasModule,
    MotoristasModule,
    ManutencaoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
