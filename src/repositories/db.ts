import {MongoClient} from "mongodb";
import * as dotenv from 'dotenv'
dotenv.config()

const mongoUri = process.env.MONGO_URL
if(!mongoUri){
    throw new Error('URL not found')
}

export const client = new MongoClient(mongoUri);

export async function runDb(){
    try {
        await client.connect()
        console.log("Connected successfully to mongo server")
    }
    catch {
        console.log("Can't connect to db")
        await client.close()
    }
}