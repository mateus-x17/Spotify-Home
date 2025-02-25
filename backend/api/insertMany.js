//inserir varios registros no banco de dados
// retirar o id do objeto para que o mongo insira um id automaticamente

import {artistArray} from '../../frontend/src/assets/database/artists.js';
import {songsArray} from '../../frontend/src/assets/database/songs.js';
import {db} from './connect.js';

export const newArtistArray = artistArray.map((artist) => {
    const newArtistObj = {...artist}; //cria um novo objeto com os mesmos valores do objeto original
    delete newArtistObj.id; //remove o id do objeto
    return newArtistObj;
});
export const newSongsArray = songsArray.map((song) => {
    const newSongObj = {...song}; //cria um novo objeto com os mesmos valores do objeto original
    delete newSongObj.id; //remove o id do objeto
    return newSongObj;
});

const responseSongs = await db.collection('artists').insertMany(newArtistArray); //insere varios registros no banco de dados
const responseArtists = await db.collection('songs').insertMany(newSongsArray);


console.log(responseArtists);

