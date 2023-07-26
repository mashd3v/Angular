export interface Product {
    description: string;
    price: number;
};

// const phone: Product = {
//     description: 'iPhone 14 Plus',
//     price: 24000.00,
// };

// const tablet: Product = {
//     description: 'iPad Air 5th generation',
//     price: 18000.00,
// };

interface TaxCalculationOptions {
    products: Product[];
    tax: number;
};

// function taxCalculator(options: TaxCalculationOptions): [number, number] {
// function taxCalculator({tax, products}: TaxCalculationOptions): [number, number] {
export function taxCalculator(options: TaxCalculationOptions): [number, number] {
    const {products, tax} = options;

    let total = 0;
    products.forEach(({price}) => {
        total += price;
    });
    return [total, total * tax];
}

// const shoppingCart = [phone, tablet];
// const tax = 0.16;

// const [total, totalTax] = taxCalculator({products: shoppingCart, 
//                                         tax});

// console.log('Total: ', total);
// console.log('Tax: ', totalTax);

