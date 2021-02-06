const express = require("express");

const app = express();

app.listen(8080, () => {
  console.log("Serveur à l'écoute");
});

const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const dbName = "parkingApi";
let db;

MongoClient.connect(url, function (err, client) {
  console.log("Connected successfully to server");
  db = client.db(dbName);
});
