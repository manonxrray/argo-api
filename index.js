const express = require("express");
const Person = require("./models/person");

require("./db");

const app = express();

const port = process.env.PORT || 3301;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// POST route

app.post("/argonautes", (req, res, next) => {
  delete req.body._id;
  const person = new Person({
    ...req.body,
  });
  person
    .save()
    .then(() => res.status(201).json({ message: "Objet enregistré !" }))
    .catch((error) => res.status(400).json({ error }));
});

// GET route

app.use("/argonautes", (req, res, next) => {
  Person.find()
    .then((persons) => res.status(200).json(persons))
    .catch((error) => res.status(400).json({ error }));
});
