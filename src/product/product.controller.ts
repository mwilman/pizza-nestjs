import { Controller, Get } from '@nestjs/common';
import { Product } from './model/product';

@Controller('product')
export class ProductController {
  @Get()
  getAllProducts(): Product[] {
    return [
      {
        identifier: '1',
        description: 'Pizza Margeritha',
        price: 4.5,
        type: 'pizza',
      },
      {
        identifier: '2',
        description: 'Pizza Salami',
        price: 5.5,
        type: 'pizza',
      },
      {
        identifier: '3',
        description: 'Lasagne',
        price: 5.0,
        type: 'pasta',
      },
      {
        identifier: '4',
        description: 'Pasta Napoli',
        price: 5.5,
        type: 'pasta',
      },
      {
        identifier: '5',
        description: 'Pasta Bolognese',
        price: 6.0,
        type: 'pasta',
      },
      {
        identifier: '6',
        description: 'Wiener Schnitzel',
        price: 6.5,
        type: 'schnitzel',
      },
      {
        identifier: '7',
        description: 'Zigeuner Schnitzel',
        price: 7.5,
        type: 'schnitzel',
      },
      {
        identifier: '8',
        description: 'Pommes klein',
        price: 1.2,
        type: 'snacks',
      },
      {
        identifier: '9',
        description: 'Pommes groß',
        price: 2.0,
        type: 'snacks',
      },
      {
        identifier: '10',
        description: "Ben & Jerry's",
        price: 2.0,
        type: 'snacks',
      },
    ];
  }
}
