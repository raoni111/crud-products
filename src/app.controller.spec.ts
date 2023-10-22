import { Test, TestingModule } from '@nestjs/testing';
import ProductModule from './modules/product.module';
import ProductController from './controllers/product.controller';

describe('AppController', () => {
    let app: TestingModule;

    beforeAll(async () => {
        app = await Test.createTestingModule({
            imports: [ProductModule],
        }).compile();
    });

    describe('get product', () => {
        it('should return "Hello World!"', () => {
            const appController = app.get(ProductController);
            expect('').toBeTruthy();
        });
    });
});
