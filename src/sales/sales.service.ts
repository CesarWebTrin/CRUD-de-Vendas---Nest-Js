/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, NotFoundException } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {SaleRepository} from './sales.repository';
import {SaleDTO} from './dtos/SaleDTO';
import {Sale} from './sale.entity';

@Injectable()
export class SalesService {
  constructor(
    @InjectRepository(SaleRepository)
    private saleRepository: SaleRepository,
  ) {}

  async createSale(saleDTO: SaleDTO){
    return this.saleRepository.createSale(saleDTO);
  }

  async findSaleById(saleId: number): Promise<Sale> {
    const sale = await this.saleRepository.findOne(saleId, {
      select: ['value', 'status', 'product_id'],
    });

    if(!sale) throw new NotFoundException('Venda não encontrada');

    return sale;
  }

  async updateSale(saleDTO: SaleDTO, id: number): Promise<Sale>{
    const result = await this.saleRepository.update({id}, saleDTO);
    if(result.affected > 0){
      const sale = await this.findSaleById(id);
      return sale;
    } else{
      throw new NotFoundException('Produto não encontrado');
    }
  }

  async deleteSale(saleId: number){
    const result = await this.saleRepository.delete({id: saleId});
    if(result.affected === 0) {
      throw new NotFoundException(
        'Não foi encontrada nenhuma venda',
      );
    }
  }
}
