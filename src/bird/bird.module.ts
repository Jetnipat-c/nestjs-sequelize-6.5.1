import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { BirdController } from './bird.controller';
import { BirdService } from './bird.service';
import { bProviders } from './entity/bird.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [BirdController],
  providers: [BirdService, ...bProviders],
  exports: [BirdService],
})
export class BirdModule {}
