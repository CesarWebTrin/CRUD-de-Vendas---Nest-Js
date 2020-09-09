/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {ProductRepository} from './products.repository';
import {Product} from './product.entity';
import { ProductDTO } from './dtos/ProductDTO';
//import { UpdateProductDTO } from './dtos/UpdateProductDTO';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductRepository)
    private productRepository: ProductRepository,
  ){}

  async createProduct(productDTO: ProductDTO): Promise<Product>{
    return this.productRepository.createProduct(productDTO);
  }

  async findProductById(productId: number): Promise<Product>{
    const product = await this.productRepository.findOne(productId,{
      select: ['title', 'price', 'status'],
    });

    if(!product) throw new NotFoundException('Produto não encontrado');

    return product;
  }

  async updateProduct(productDTO: ProductDTO, id: number): Promise<Product>{
    const result = await this.productRepository.update({id}, productDTO);
    if(result.affected > 0){
      const product = await this.findProductById(id);
      return product;
    } else{
      throw new NotFoundException('Produto não encontrado');
    }
  
  }

  async deleteProduct(productID: number){
    const result = await this.productRepository.delete({id: productID});
    if(result.affected === 0){
      throw new NotFoundException('Não foi encontrado nenhum produto com esse id');
    }
  }
}
