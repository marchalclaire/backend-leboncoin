const mongoose = require("mongoose");

//le modèle est la représentaiton de comment vont être stockées les données dans la base mongo :
const User = mongoose.model("User", {
  email: {
    type: String,
    default: ""
  },
  username: {
    type: String,
    default: ""
  },
  token: {
    type: String,
    default: ""
  },
  salt: {
    type: String,
    default: ""
  },
  hash: {
    type: String,
    default: ""
  }
});

module.exports = User;
