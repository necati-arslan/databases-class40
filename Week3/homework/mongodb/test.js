//https://github.com/mongodb-developer/nodejs-quickstart

const { MongoClient } = require("mongodb");

async function main() {
  const uri =
    "mongodb+srv://event:u2qtoGIQMaWoH98y@cluster0.woiqa.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    //  await listDatabases(client);
    await createListing(client, {
      name: "Lovely Loft",
      summary: "A charming loft in Paris",
      bedrooms: 1,
      bathrooms: 1,
    });
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}

async function listDatabases(client) {
  const databaseList = await client.db().admin().listDatabases();
  console.log("databases");
  databaseList.databases.forEach((db) => {
    console.log(db.name);
  });
}

async function createListing(client, newListing) {
  // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#insertOne for the insertOne() docs
  const result = await client
    .db("sample_airbnb")
    .collection("listingsAndReviews")
    .insertOne(newListing);
  console.log(
    `New listing created with the following id: ${result.insertedId}`
  );
}

main().catch(console.log);
