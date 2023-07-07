import { Module } from '@nestjs/common';
import { DormantController } from './dormant.controller';
import { DormantService } from './dormant.service';

@Module({
  controllers: [DormantController],
  providers: [DormantService]
})
export class DormantModule {}
