export interface ProductType {
    id?: string;
    name: string;
    amount: number;
    category: string;
}

export default interface ProductServiceProtocol {
    getProduct(): Promise<ProductType[]>;
    filterProductByCategory(category: string): Promise<ProductType[]>;
    getProductById(id: string): Promise<ProductType[]>;
    deleteProduct(id: string): Promise<ProductType[]>;
    putProduct(body: ProductType, id: string): Promise<ProductType[]>;
    postProduct(body: ProductType): Promise<ProductType[]>;
}
