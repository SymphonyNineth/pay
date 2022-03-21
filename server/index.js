const express = require("express");
const mongoose = require("mongoose");
const Card = require("./schemas/Card");
const { validateCard } = require("./validation");

const PORT = process.env.PORT || 5000;

const DBL =
  "mongodb+srv://hayk:hayk@cluster0.z6gfo.mongodb.net/Cluster0?retryWrites=true&w=majority";

const app = express();
app.use(express.json());

async function start() {
  try {
    await mongoose.connect(DBL);
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
}

start();

app.post("/cards", (req, res) => {
  const { isValid, msg } = validateCard(req.body);
  if (isValid) {
    const card = new Card({
      number: 123853828382838,
      exprDate: 31232412409303,
      cvv: 526,
      amount: 1500,
    });
    return card.save().then(() => res.json(card));
  }

  res.send(msg);
});
