//requisições para o backend - feitas com axios (mas também pode ser feito com fetch)
import axios from 'axios';

const URL = 'http://localhost:3000'; //url do backend

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);


export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;


// export const getArtists = async () => {
//     const response = await axios.get(`${URL}/artists`);
//     return response.data;

// }; //pega todos os artistas do banco de dados

// export const getSongs = async () => {
//     const response = await axios.get(`${URL}/songs`);
//     return response.data;
// }; //pega todas as músicas do banco de dados

