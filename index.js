//6- la ligne suivante ne doit être utilisée qu'une seule fois et au tout début du projet (de préférence ds index.js)
//permet d'activer les variables d'environnement qui se trouvent dans le fichier .env
require("dotenv").config();

const express = require("express"); //1-importer les dépendances pour la création d'un serveur:
const mongoose = require("mongoose");
const formidableMiddleware = require("express-formidable"); //10-importer formidable
const cors = require("cors"); //9-importer Cors
const cloudinary = require("cloudinary").v2; //11-importer cloudinary

const app = express(); //2-créer le serveur

//5-connection avec la base de donnée :
//mongoose.connect("mongodb://localhost/backend-leboncoin", {
//7-remplacer url par variable d'environnement :
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
// activer Cors et Formidable (tjs avant routes et models)
app.use(cors());
app.use(formidableMiddleware());

require("./models/User");
const userRoutes = require("./routes/signup");

// Activer les routes
app.use(userRoutes);

// //12-configurer cloudinary (mettre réél passe dans .env)
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET
// });

//4-démarrer le serveur :
app.listen(4000, () => {
  console.log("Server started");
});
