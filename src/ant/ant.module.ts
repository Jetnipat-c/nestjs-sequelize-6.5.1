import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { AntController } from './ant.controller';
import { AntService } from './ant.service';
import { aProviders } from './entity/ant.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [AntController],
  providers: [AntService, ...aProviders],
  exports: [AntService],
})
export class AntModule {}
