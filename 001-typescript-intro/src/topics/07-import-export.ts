import {Product, taxCalculator} from './06-function-destructuring';

const shoppingCart: Product[] = [
    {
        description: 'iPhone 14 Plus',
        price: 24000.00,
    },
    {
        description: 'iPad Air 5th generation',
        price: 18000.00,
    }
];

const [total, tax] = taxCalculator({products: shoppingCart, tax: 0.16});

console.log('Total: ', total);
console.log('Tax: ', tax);