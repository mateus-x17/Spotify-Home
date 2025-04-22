
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const client = new MongoClient(process.env.connectURI); //conecta com o cluster de dados

export const db = client.db(process.env.DBname); //pega o banco de dados dentro do cluster
// const songCollection = await db.collection('songs').find({}).toArray(); //pega a collection (tabela) dentro do banco de dados
// console.log(songCollection);




