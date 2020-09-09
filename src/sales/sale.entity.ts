/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  BaseEntity,
  Entity,    
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import {Product} from '../products/product.entity';

@Entity()
export class Sale extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: false, type: 'decimal'})
  value: number;

  @Column({nullable: false, type: 'varchar', length: 200})
  status: string;

  @Column({nullable: false, type: 'varchar'})
  product_id: number;

  @OneToMany(type => Product, product => product.id) 
  product: Product[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}