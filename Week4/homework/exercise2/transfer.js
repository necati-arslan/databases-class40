const transferAccount = async (client, sender, receiver, amount, remark) => {
  const session = await client.startSession();
  try {
    await client.startSession().withTransaction(async () => {
      await client
        .db("week4")
        .collection("accounts")
        .updateOne(
          { account_number: sender },
          {
            $inc: { balance: -amount },
            $push: {
              account_changes: {
                change_number:
                  (await getAccountChangeNumber(client, sender)) + 1,
                amount: amount,
                changed_date: new Date(),
                remark: remark,
              },
            },
          },

          { session }
        );

      await client
        .db("week4")
        .collection("accounts")
        .updateOne(
          { account_number: receiver },
          {
            $inc: { balance: +amount },
            $push: {
              account_changes: {
                change_number:
                  (await getAccountChangeNumber(client, receiver)) + 1,
                amount: amount,
                changed_date: new Date(),
                remark: remark,
              },
            },
          },

          { session }
        );
    });
    console.log(`${amount} euro transferred . The transaction is complated`);
  } finally {
    await session.endSession();
  }
};

const getAccountChangeNumber = async (client, sender) => {
  const findAccount = await client
    .db("week4")
    .collection("accounts")
    .findOne({ account_number: sender });

  return findAccount.account_changes.length;
};

module.exports = { transferAccount };
