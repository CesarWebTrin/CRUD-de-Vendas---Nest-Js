import { Module } from '@nestjs/common';
import { TypeOrmModule} from '@nestjs/typeorm';
import {SaleRepository} from './sales.repository';
import { SalesService } from './sales.service';
import { SalesController } from './sales.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SaleRepository])],
  providers: [SalesService],
  controllers: [SalesController],
})
export class SalesModule {}
