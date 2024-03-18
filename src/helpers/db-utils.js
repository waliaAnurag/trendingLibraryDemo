import { MongoClient } from 'mongodb';

export async function connectDataBase(){
  try{
    const client = await MongoClient.connect(process.env.MONGODB_URI)
     
    return client
  }catch(err){
 
    return client;
  }
  }

  export async function insertDocument(client,collectionName,document){

    const db = client.db("trendingBookLibrary")
 
    await db.collection(collectionName).insertOne(document);
  }

  export async function getAllDocuments(client,collectionName, sort){
    const db = client.db("trendingBookLibrary");
    const document = await db.collection(collectionName).find().sort(sort).toArray();
    return document;
  }