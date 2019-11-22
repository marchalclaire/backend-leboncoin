const express = require("express");
const mongoose = require("mongoose");
const formidableMiddleware = require("express-formidable"); //10-importer formidable
const cors = require("cors"); //9-importer Cors
//on importe les api de sécurité du mot de passe :
const SHA256 = require("crypto-js/sha256");
const encBase64 = require("crypto-js/enc-base64");
const uid2 = require("uid2");
const router = express.Router();
const User = require("../models/User");

// SIGN-UP ################################################

// CREATE (on ne peut que "créer" un user via la page sign-up, pas de read, delete ou update)

router.post("/api/user/sign_up", async (req, res) => {
  console.log(req.fields);
  const token = uid2(64);
  const salt = uid2(64);
  const hash = SHA256(req.fields.password + salt).toString(encBase64);
  try {
    const user = new User({
      email: req.fields.email,
      token: token,
      salt: salt,
      hash: hash,
      username: req.fields.username
    });

    await user.save();
    res.json({ token: token });
  } catch (error) {
    //error.message = syntaxe mise en place par MONGO (permet de diffuser le message d'erreur)
    console.log(error.message);
    res.send(error.message);
  }
});
module.exports = router;
