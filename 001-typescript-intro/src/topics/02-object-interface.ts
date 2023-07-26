const skills: string[] = ['Bash', 'Counter', 'Healing'];

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string; // Opcional
}

const strider: Character = {
    name: 'Strider',
    hp: 95,
    skills: ['Bash', 'Counter']
};

strider.hometown = 'Rivendell';

console.table(strider);


export {};