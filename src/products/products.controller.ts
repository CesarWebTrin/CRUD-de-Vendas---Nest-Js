import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import {ProductDTO} from './dtos/ProductDTO';
//import { UpdateProductDTO } from './dtos/UpdateProductDTO';
import {ProductsService} from './products.service';
import {Product} from './product.entity';

/* Todas as rotas seguem a regra de negócio determinada pelo service */

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService){}

  @Post()
  async createProduct(
    @Body() productDTO: ProductDTO,
  ): Promise<Product>{
    return  await this.productService.createProduct(productDTO);
  }

  @Get(':id')
  async findProductById(@Param('id') id): Promise<Product>{
    return await this.productService.findProductById(id);
  }

  @Patch(':id')
  async updateProduct(
    @Body() productDTO: ProductDTO,
    @Param('id') id: number,
  ){
    return await this.productService.updateProduct(productDTO, id);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: number){
    await this.productService.deleteProduct(id);
    return {message: 'Produto removido com sucesso'};
  }
}
