import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './configs/typeorm.config';
import { ExampleModule } from './example/example.module';
import { configConfig } from './configs/config.config';
import { AuthModule } from './auth/auth.module';
import { ManagerModule } from './manager/manager.module';
import { MenuModule } from './menu/menu.module';
import { OrderModule } from './order/order.module';
import { StoreModule } from './store/store.module';

@Module({
  imports: [
    ConfigModule.forRoot(configConfig),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    ExampleModule,
    AuthModule,
    ManagerModule,
    MenuModule,
    OrderModule,
    StoreModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
