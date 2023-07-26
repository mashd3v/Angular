// Función normal
function addNumbers(a: number, b: number): number {
  return a + b;
}

// Función flecha
const addNumbersArrow = (a: number, b: number): string => {
    return `${a + b}`;
}

// Función con parámetros opcionales
function multiply(primerNumero: number, segundoNumero?: number, base: number = 2){
    return primerNumero * base;
}

// const resultado: number = addNumbers(2, 3);
// const resultadoArrow: string = addNumbersArrow(2, 3);
// const resultadoMultiply: number = multiply(2);

// Imprimir resultados
// console.log({resultado, resultadoArrow, resultadoMultiply});


//----------------------------------------------

// Creamos una interfaz paea un personaje
interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

// Creamos una función que recibe un personaje y un número, la cual se va a encargar de curar al personaje
const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
};

// Creamos un personaje
const strider: Character ={
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida: ${this.hp}`);
    }
};

// Curamos al personaje
healCharacter(strider, 20);

// Mostramos los puntos de vida del personaje
strider.showHp();

export {};