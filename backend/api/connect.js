// "mongodb+srv://mateusinaciorocha005:naruto123741@cluster0.vt9qq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
import { MongoClient } from 'mongodb';
const URI = 'mongodb+srv://mateusinaciorocha005:naruto123741@cluster0.vt9qq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; //string de conexão com o banco de dados
const client = new MongoClient(URI); //conecta com o cluster de dados

export const db = client.db('Spotify'); //pega o banco de dados dentro do cluster
// const songCollection = await db.collection('songs').find({}).toArray(); //pega a collection (tabela) dentro do banco de dados
// console.log(songCollection);
