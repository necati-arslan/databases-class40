const { MongoClient } = require("mongodb");
require("dotenv").config();

const calculateTotalPopulationByYear = async (client, country) => {
  const pipeLine = [
    {
      $match: {
        Country: country,
      },
    },
    {
      $group: {
        _id: "$Year",
        countPopulation: {
          $sum: {
            $sum: ["$M", "$F"],
          },
        },
      },
    },
    {
      $sort: {
        _id: 1,
      },
    },
  ];

  const resultArr = client
    .db("week4")
    .collection("population")
    .aggregate(pipeLine);

  const result = await resultArr.toArray();
  console.log(result);
};

const calculateTotalPopulationByAge = async (client, age, year) => {
  const pipeLine = [
    {
      $match: {
        Country: {
          $in: [
            "AFRICA",
            "ASIA",
            "EUROPE",
            "LATIN AMERICA AND THE CARIBBEAN",
            "NORTHERN AMERICA",
            "OCEANIA",
          ],
        },
        Age: "5-9",
        Year: "2010",
      },
    },
    {
      $addFields: {
        TotalPopulation: {
          $sum: ["$M", "$F"],
        },
      },
    },
  ];

  const resultArr = client
    .db("week4")
    .collection("population")
    .aggregate(pipeLine);

  const result = await resultArr.toArray();

  console.log("Result of by Age", result);
};

async function main() {
  const uri = process.env.MONGODB_URL;
  const client = new MongoClient(uri);

  try {
    await client.connect();
    await calculateTotalPopulationByYear(client, "Netherlands");
    await calculateTotalPopulationByAge(client, "5-9", 2010);
  } catch (err) {
    console.error(err);
  } finally {
    client.close();
  }
}

main();
