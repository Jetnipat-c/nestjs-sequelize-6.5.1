import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CatController } from './cat.controller';
import { CatService } from './cat.service';
import { cProviders } from './entity/cat.provider';
@Module({
  imports: [DatabaseModule],
  controllers: [CatController],
  providers: [CatService, ...cProviders],
  exports: [CatService],
})
export class CatModule {}
