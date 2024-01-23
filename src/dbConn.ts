import { Db, MongoClient } from "mongodb";
import { SECRET_URI } from '$env/static/private';


export const dbConn = async (): Promise<Db> => {
    const client = new MongoClient(SECRET_URI);
    await client.connect();
    const dbName = 'pos_digital';
    const db = client.db(dbName);
    return db
}