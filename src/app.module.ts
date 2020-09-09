import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {typeOrmConfig} from './configs/typeorm.config';
import { ProductsModule } from './products/products.module';
import { SalesModule } from './sales/sales.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), ProductsModule, SalesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
