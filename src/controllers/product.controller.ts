import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import ProductService from 'src/services/product.service';
import { ProductType } from 'src/services/types/product-service';

@Controller('product')
export default class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get()
    getProduct(@Res() res: Response) {
        this.productService.getProduct().then((response) => {
            res.status(200).json(response);
        });
    }

    @Get('/by/category/:category')
    getProductByCategory(
        @Param() param: { category: string },
        @Res() res: Response,
    ) {
        this.productService
            .filterProductByCategory(param.category)
            .then((response) => {
                res.status(200).json(response);
            });
    }

    @Get('/by/id/:id')
    getProductById(@Param() { id }: { id: string }, @Res() res: Response) {
        this.productService.getProductById(id).then((response) => {
            res.status(200).json(response);
        });
    }

    @Post()
    postProduct(@Body() body: ProductType, @Res() res: Response) {
        this.productService.postProduct(body).then((response) => {
            res.status(200).json(response);
        });
    }

    @Put('/:id')
    putProduct(
        @Body() body: ProductType,
        @Param() param: { id: string },
        @Res() res: Response,
    ) {
        this.productService.putProduct(body, param.id).then((response) => {
            res.status(200).json(response);
        });
    }

    @Delete()
    deleteProduct(@Param() { id }: { id: string }, @Res() res: Response) {
        this.productService.deleteProduct(id).then((response) => {
            res.status(200).json(response);
        });
    }
}
