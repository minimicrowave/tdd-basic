import { MongoClient } from "mongodb";

const getClientDb = async () => {
  const client = await MongoClient.connect(`mongodb://localhost:27017/TEST_DB`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  return { client, db: client.db("TEST_DB") };
};

export const setDbData = async (collectionName, data) => {
  const { client, db } = await getClientDb();
  await db.collection(collectionName).insertMany(data);

  client.close();
};

export const getDbData = async (collectionName) => {
  const { client, db } = await getClientDb();
  const result = await db.collection(collectionName).find().toArray();

  client.close();

  return result;
};

export const resetDb = async () => {
  const { client, db } = await getClientDb();
  await db.dropDatabase();

  client.close();
};
