import { Module } from '@nestjs/common';
import { PneusService } from './pneus.service';
import { PneusController } from './pneus.controller';

@Module({
  controllers: [PneusController],
  providers: [PneusService],
})
export class PneusModule {}
