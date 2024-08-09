import { Module } from '@nestjs/common';
import { ManagerController } from './manager.controller';
import { ManagerService } from './manager.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Manager } from './entities/manager.entity';
import { Store } from 'src/store/store.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Manager, Store])],
  controllers: [ManagerController],
  providers: [ManagerService], 
  exports: [ManagerService],
})
export class ManagerModule {}
