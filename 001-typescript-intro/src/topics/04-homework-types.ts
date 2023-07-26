/*
    Resolver este problema:

    const superHeroe: SuperHero = {
        name: 'Spiderman',
        age: 30,
        address: {
            calle: 'Main St',
            pais: 'USA',
            ciudad: 'NY'
        },
        showAddress() {
            return this.name + ', ' + this.address.ciudad + ', ' + this.address.pais;
        }
    }
    
    
    const address = superHeroe.showAddress();
    console.log( address );
    
    
    
    
    export {};
*/

interface Address {
    street: string;
    city: string;
    country: string;
};

interface SuperHero {
    name: string;
    age: number;
    address: Address;
    showAddress: () => string;
};

const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        city: 'NY',
        country: 'USA',
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};