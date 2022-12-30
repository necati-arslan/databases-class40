const createCollectionAndInsert = async (client) => {
  await client.db("week4").collection("accounts").drop();

  await client.db("week4").createCollection("accounts");

  await client
    .db("week4")
    .collection("accounts")
    .insertMany([
      {
        account_number: 100,
        balance: 1000,
        account_changes: [
          {
            change_number: 1,
            amount: 200,
            change_date: "2022-12-30",
            remark: "borrow",
          },
        ],
      },
      {
        account_number: 101,
        balance: 2000,
        account_changes: [
          {
            change_number: 15,
            amount: 202,
            change_date: "2022-12-30",
            remark: "loan",
          },
        ],
      },
      {
        account_number: 102,
        balance: 3000,
        account_changes: [
          {
            change_number: 33,
            amount: 300,
            change_date: "2022-12-30",
            remark: "payment",
          },
        ],
      },
      {
        account_number: 103,
        balance: 4000,
      },
    ]);
};

module.exports = { createCollectionAndInsert };
