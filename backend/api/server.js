import express from 'express';
import cors from 'cors';
import {db} from './connect.js';


const port = 3000;
const app = express(); //pega todos os metodos do express e coloca dentro da variavel app

app.use(cors()); //middleware para permitir que o frontend acesse o backend pois estão em portas diferentes


app.get('/', (req, res) => {
    res.send('olá mundo !');
});
app.get('/artists', async (req, res) => {
    res.send(await db.collection('artists').find({}).toArray());
});
app.get('/songs', async (req, res) => {
    res.send(await db.collection('songs').find({}).toArray());
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

