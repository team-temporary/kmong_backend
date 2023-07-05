import { Module } from '@nestjs/common';
import { BlameController } from './blame.controller';
import { BlameService } from './blame.service';

@Module({
  controllers: [BlameController],
  providers: [BlameService]
})
export class BlameModule {}
