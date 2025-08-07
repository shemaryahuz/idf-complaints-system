import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_CONNECTION);

const dbName = "complaints_system";

async function connect() {
    await client.connect();
    const db = client.db(dbName);
    console.log(`Connected to MongoDB.  Database name: ${dbName}.`);
    return db;
}

const db = await connect();

export default db;