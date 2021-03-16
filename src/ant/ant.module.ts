import { Module } from '@nestjs/common';
import { AntController } from './ant.controller';
import { AntService } from './ant.service';

@Module({
  controllers: [AntController],
  providers: [AntService]
})
export class AntModule {}
