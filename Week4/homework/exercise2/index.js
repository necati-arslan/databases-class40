const { MongoClient } = require("mongodb");
require("dotenv").config();
const { createCollectionAndInsert } = require("./setup.js");
const { transferAccount } = require("./transfer");

async function main() {
  const uri = process.env.MONGODB_URL;
  const client = new MongoClient(uri);

  try {
    await client.connect();
    await createCollectionAndInsert(client);
    await transferAccount(client, 101, 102, 1000, "payment");
  } catch (err) {
    console.error(err);
  } finally {
    client.close();
  }
}

main();
