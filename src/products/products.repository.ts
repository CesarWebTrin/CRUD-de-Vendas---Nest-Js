import { EntityRepository, Repository } from 'typeorm';
import { Product } from './product.entity';
import { ProductDTO } from './dtos/ProductDTO';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
  async createProduct(
    productDTO: ProductDTO,
  ): Promise<Product> {
    const {title, price, status} = productDTO;

    const product = this.create();
    product.title = title;
    product.price = price;
    product.status = status;
    
    try{
      await product.save();
      delete product.title;
      return product;
    }catch(error){
      console.error();
    }
  }

  
}