interface Details{
    author: string;
    year: number;
};

interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 180,
    song: 'Hey Jude',
    details: {
        author: 'The Beatles',
        year: 1968,
    }
};

// Desestructuración de objetos
// El problema de la desestructuración es que tenemos que conocer la estructura del objeto
// console.log('Song: ', audioPlayer.song);
// console.log('Duration: ', audioPlayer.songDuration);
// console.log('Author: ', audioPlayer.details.author);

// Y qué pasa si tenemos otra variable con el mismo nombre?
const song = 'Obla di Obla da';

// Con la destructuración podemos asignar un alias
const {song: anotherSong, songDuration: duration} = audioPlayer;
// console.log('Song: ', anotherSong);
// console.log('Duration: ', duration);

// Desestructuración de objetos anidados
const {details} = audioPlayer;
const {author} = details;
// console.log('Author: ', author);


// Desestructuración de arrays
const [harry, hermione, ron = 'No encontrado']: string[] = ['Harry', 'Hermione'];

console.log('Personaje 3: ', ron);
