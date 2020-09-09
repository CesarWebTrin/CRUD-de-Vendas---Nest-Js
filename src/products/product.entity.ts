import {
    BaseEntity,
    Entity,    
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
  } from 'typeorm';

import {Sale} from '../sales/sale.entity';

@Entity()
export class Product extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false, type: 'varchar', length: 200})
    title: string;

    @Column({nullable: false, type: 'decimal'})
    price: number;

    @Column({nullable: false, type: 'varchar', length: 200})    
    status: string;

    @ManyToOne(type => Sale, sale => sale.id)
    sale: Sale;
 
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
}