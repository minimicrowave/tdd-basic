import { MongoClient } from "mongodb";

const DB_NAME = process.env.NODE_ENV === "test" ? "TEST_DB" : "PROD_DB";

export const getUserByUsername = async (username) => {
  const client = await MongoClient.connect(
    `mongodb://localhost:27017/${DB_NAME}`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  );

  const db = client.db(DB_NAME);

  const result = await db.collection("users").findOne({ username });

  client.close();

  return result;
};

export default { getUserByUsername };
