import { Injectable } from '@nestjs/common';
import ProductServiceProtocol, { ProductType } from './types/product-service';
import Product from 'src/models/product';

@Injectable()
export default class ProductService implements ProductServiceProtocol {
    async getProduct(): Promise<ProductType[]> {
        let product = [];
        await Product.findAll().then((response: any) => {
            product = response as ProductType[];
        });

        return product;
    }

    async postProduct(body: ProductType): Promise<ProductType[]> {
        await Product.create({
            name: body.name,
            category: body.category,
            amount: body.amount,
        });

        return this.getProduct();
    }

    async putProduct(body: ProductType, id: string): Promise<ProductType[]> {
        await Product.update(body, {
            where: {
                id,
            },
        });

        return this.getProduct();
    }

    async deleteProduct(id: string): Promise<ProductType[]> {
        await Product.destroy({
            where: {
                id,
            },
        });

        return this.getProduct();
    }

    async filterProductByCategory(category: string): Promise<ProductType[]> {
        let product = [] as ProductType[];

        await Product.findAll({
            where: {
                category,
            },
        }).then((response: any) => {
            product = response as ProductType[];
        });

        return product;
    }

    async getProductById(id: string): Promise<ProductType[]> {
        let product = [] as ProductType[];

        await Product.findOne({
            where: {
                id,
            },
        }).then((response: any) => {
            product = response as ProductType[];
        });

        return product;
    }
}
