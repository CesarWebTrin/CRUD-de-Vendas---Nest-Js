import {EntityRepository, Repository}from 'typeorm';
import {Sale} from './sale.entity';
import {SaleDTO} from './dtos/SaleDTO';
import { ConflictException } from '@nestjs/common';

@EntityRepository(Sale)
export class SaleRepository extends Repository<Sale> {
  async createSale(
    saleDTO: SaleDTO,
  ): Promise<Sale> {
    const {value, status, product_id} = saleDTO;

    const sale = this.create();
    sale.value = value;
    sale.status = status;
    sale.product_id = product_id; 

    try{
      await sale.save();
      return sale;
    }catch(error){
      throw new ConflictException('Essa venda já está cadastrada');
    }
  }
}