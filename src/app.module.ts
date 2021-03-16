import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { AntModule } from './ant/ant.module';
import { BirdModule } from './bird/bird.module';
import { CatModule } from './cat/cat.module';

@Module({
  imports: [DatabaseModule, AntModule, BirdModule, CatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
