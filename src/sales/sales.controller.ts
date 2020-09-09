import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import {SalesService} from './sales.service';
import {SaleDTO} from './dtos/SaleDTO';
import {Sale} from './sale.entity';

@Controller('sales')
export class SalesController {
  constructor(private salesService: SalesService){}

  @Post()
  async createSale(
    @Body() saleDTO: SaleDTO,
  ): Promise <Sale>{
    const sale = await this.salesService.createSale(saleDTO);
    return sale;
  }

  @Get(':id')
  async findSaleById(@Param('id') id): Promise<Sale>{
    const sale = await this.salesService.findSaleById(id);
    return sale;
  }

  @Patch(':id')
  async updateSale(
    @Body() saleDTO: SaleDTO,
    @Param('id') id: number,
  ){
    return this.salesService.updateSale(saleDTO, id );
  }

  @Delete(':id')
  async deleteSale(@Param('id') id:number){
    await this.salesService.deleteSale(id);
    return {
      message: 'Venda deletada com sucesso',
    }
  }
}
