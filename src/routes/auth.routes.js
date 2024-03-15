const express = require("express");
const router = express.Router();

const { login, register } = require("../controllers/auth");

router.get("/iniciar", login);

router.get("/registro", register);

module.exports = router;
