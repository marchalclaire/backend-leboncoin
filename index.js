//importer les dépendances pour la création d'un serveur:
const express = require("express");
const mongoose = require("mongoose");

//créer le serveur :
const app = express();

//créer des routes (à chaque fois qu'un utilisateur ira sur cette page, cette fonction sera déclenchée) :
app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

//démarrer le serveur :
app.listen(4000, () => {
  console.log("Server started");
});
