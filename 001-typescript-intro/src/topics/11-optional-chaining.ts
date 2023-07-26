export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Miguel',
};

const passenger2: Passenger = {
    name: 'Ruth',
    children: ['Hannia', 'Zurisadai']
};

const printChildren = (passenger: Passenger): number => {
    const howManyChildren = passenger.children?.length || 0;
    console.log(passenger.name, howManyChildren);
    return howManyChildren;
}

printChildren(passenger2);
printChildren(passenger1);