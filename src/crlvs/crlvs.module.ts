import { Module } from '@nestjs/common';
import { CrlvsService } from './crlvs.service';
import { CrlvsController } from './crlvs.controller';

@Module({
  controllers: [CrlvsController],
  providers: [CrlvsService],
})
export class CrlvsModule {}
